<template>
    <div
        class="ace-editor"
        :id="editor_id"></div>
</template>

<script>
import ace from "ace-builds";
import "ace-builds/src-noconflict/ext-language_tools";
const modeContext = require.context("ace-builds/src-noconflict", false, /mode-.*\.js$/);
const themeContext = require.context("ace-builds/src-noconflict", false, /theme-.*\.js$/);
function loadMode(mode) {
    const name = typeof mode === "string" ? mode.split("/").pop() : "text";
    const file = `./mode-${name}.js`;
    if (modeContext.keys().includes(file)) {
        modeContext(file);
    } else {
        modeContext("./mode-text.js");
    }
    return "ace/mode/" + name;
}
function loadTheme(theme) {
    const name = typeof theme === "string" ? theme.split("/").pop() : "xcode";
    const file = `./theme-${name}.js`;
    if (themeContext.keys().includes(file)) {
        themeContext(file);
    } else {
        themeContext("./theme-xcode.js");
    }
    return "ace/theme/" + name;
}
export default {
    name: "Ace",
    props: {
        value: {
            type: String,
            default: ""
        },
        option: {
            type: Object,
            default() {
            },
        },
    },
    data() {
        return {
            editor: null,
            editor_id: "ace-" + jc._Uuid.get(),
            default_option: {
                theme: "ace/theme/xcode",
                mode: "ace/mode/nginx",
                enableSnippets: true,
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                fontSize: "14px",
                autocomplete: {
                    key: "",
                    value: [],
                },
            },
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        autoHeight(){
            const lines = this.editor.session.getLength();
            const lineHeight = this.editor.renderer.lineHeight;
            const height = (lines + 1) * lineHeight;
            this.editor.container.style.height = `${height}px`;
            this.editor.resize();
        },
        async init() {
            const language_tools = ace.require("ace/ext/language_tools");
            language_tools.addCompleter({
                getCompletions: (editor, session, pos, prefix, callback) => {
                    let list = [];
                    const arr = this.computed_option?.autocomplete?.value || [];
                    if (Array.isArray(arr) && arr.length > 0) {
                        const lowPrefix = (prefix || "").toLowerCase();
                        arr.forEach((v) => {
                            if (String(v).toLowerCase().startsWith(lowPrefix)) {
                                list.push({
                                    value: v,
                                    meta: this.computed_option?.autocomplete?.key || ""
                                });
                            }
                        });
                    }
                    callback(null, list);
                }
            });
            this.editor = ace.edit(this.editor_id);
            this.editor.setOptions({
                ...this.computed_option,
                mode: loadMode(this.computed_option.mode),
                theme: loadTheme(this.computed_option.theme),
            });
            this.editor.on("change", () => {
                this.$emit("input", this.editor.getValue());
                if (this.computed_option?.autoHeight) {
                    this.autoHeight();
                }
            });
            this.editor.setValue(this.value, -1);
        },
    },
    beforeDestroy() {
        if (this.editor) {
            this.editor.destroy();
            this.editor = null;
        }
    },
    computed: {
        computed_option: {
            get() {
                return {
                    ...this.default_option,
                    ...this.option,
                };
            }
        },
    },
    watch: {
        value(n) {
            if (this.editor && n !== this.editor.getValue()) {
                this.editor.setValue(n || "", -1)
            }
        },
        "computed_option.mode"(n) {
            if (this.editor) {
                const mode = loadMode(n);
                this.editor.session.setMode(mode);
            }
        },
        "computed_option.theme"(n) {
            if (this.editor) {
                const theme = loadTheme(n);
                this.editor.setTheme(theme);
            }
        },
    },
}
</script>

<style scoped>
.ace-editor {
    width: 100%;
    border: 1px solid #e8eaec;
    margin: 2px 0;
    border-radius: 2px;
    min-height: 36px;
    height: 100%;
    z-index: 0;
}
</style>
