<template>
    <div class="component-copy">
        <slot></slot>
        <span
            v-show="computed_copy"
            class="component-copy-icon">
            <i
                :class="`${done ? 'ri-check-line' : 'ri-file-copy-line'}`"
                @click="copy"
                title="复制"></i>
        </span>
    </div>
</template>

<script>
export default {
    name: "Copy",
    props: {
        data: {
            type: null,
            default: null,
        },
    },
    data() {
        return {
            done: false,
        };
    },
    methods: {
        async copy() {
            if (!this.computed_copy) {
                this.$Message.warning("没有可复制的内容");
                return;
            }
            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(this.computed_text);
                } else {
                    const textarea = document.createElement("textarea");
                    textarea.value = this.computed_text;
                    textarea.setAttribute("readonly", "");
                    textarea.style.cssText = "position: fixed;top: 0;left: 0;width: 0;height: 0;opacity: 0;pointer-events: none;z-index: -1;";
                    document.body.appendChild(textarea);
                    textarea.select();
                    document.execCommand("copy");
                    document.body.removeChild(textarea);
                    this.$Message.success("已复制");
                }
                this.done = true;
                setTimeout(() => (this.done = false), 1000);
            } catch (err) {
                this.$Message.error(err.toString());
            }
        },
        extractText(node_list) {
            let text = "";
            if (!node_list || !node_list.length) {
                return text;
            }
            node_list.forEach((node) => {
                if (node.text) {
                    text += node.text;
                }
                if (node.children && node.children.length) {
                    text += this.extractText(node.children);
                }
            });
            return text;
        },
    },
    computed: {
        computed_text() {
            if (this.data !== null && this.data !== undefined) {
                return String(this.data);
            }
            const slots = this.$slots.default;
            if (!slots || !slots.length) {
                return "";
            }
            return this.extractText(slots).trim();
        },
        computed_copy() {
            return this.computed_text.length > 0;
        },
    },
}
</script>

<style scoped>
.component-copy:hover .component-copy-icon {
    visibility: visible;
}

.component-copy-icon {
    margin-left: 6px;
    cursor: pointer;
    visibility: hidden;
    color: #2b85e4;
}
</style>
