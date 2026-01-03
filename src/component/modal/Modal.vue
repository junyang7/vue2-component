<template>
    <div
        style="position: fixed; left: 0; top: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center; background-color: rgba(0,0,0,0.8)"
        v-if="inner_show">
        <div
            style="width: 540px; background-color: #ffffff; padding: 30px 36px 36px 36px; box-sizing: border-box; border-radius: 4px; box-shadow: 0 0 36px 1px rgba(0,0,0,0.5); border: 1px solid #dcdee2;">
            <div style="display: flex;">
                <div style="width: 72px; height: 72px; font-size: 34px;">
                    <span :style="{color: iconColor}">
                        <i :class="iconClass"></i>
                    </span>
                </div>
                <div style="width: 100%; height: auto; min-height: 72px;">
                    <div style="height: 10px;"></div>
                    <div style="height: 36px; font-weight: 600; font-size: 20px;">
                        <slot
                            name="title">{{ inner_title }}
                        </slot>
                    </div>
                    <div style="height: 9px;"></div>
                    <div style="color: #515a6e; font-size: 14px; ">
                        <slot
                            name="content">{{ inner_content }}
                        </slot>
                    </div>
                </div>
            </div>
            <div style="height: 36px;"></div>
            <div
                style="display: flex; flex-wrap: wrap; column-gap: 9px; justify-content: flex-end">
                <div @click="cancel">
                    <slot name="cancel">
                        <Button>取消</Button>
                    </slot>
                </div>
                <div @click="ok">
                    <slot name="ok">
                        <Button type="primary">确定</Button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from "../button/Button.vue";

export default {
    name: 'Modal',
    components: {Button},
    model: {
        prop: 'show',
        event: 'input'
    },
    props: {
        type: {
            type: String,
            default: "info",
        },
        show: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: "标题",
        },
        content: {
            type: String,
            default: "内容",
        },
    },
    data() {
        return {
            inner_type: "info",
            inner_show: false,
            inner_title: "标题",
            inner_content: "内容",
            inner_cancel: null,
            inner_ok: null,
        };
    },
    watch: {
        show: {
            handler(newVal) {
                this.inner_show = newVal;
            },
            immediate: true
        },
        title: {
            handler(newVal) {
                this.inner_title = newVal;
            },
            immediate: true
        },
        content: {
            handler(newVal) {
                this.inner_content = newVal;
            },
            immediate: true
        }
    },
    methods: {
        open(option = {}) {
            if (option.hasOwnProperty("type")) {
                this.inner_type = option.type;
            } else {
                this.inner_type = this.type;
            }
            if (option.hasOwnProperty("show")) {
                this.inner_show = option.show;
            } else {
                this.inner_show = this.show;
            }
            if (option.hasOwnProperty("title")) {
                this.inner_title = option.title;
            } else {
                this.inner_title = this.title;
            }
            if (option.hasOwnProperty("content")) {
                this.inner_content = option.content;
            } else {
                this.inner_content = this.content;
            }
            if (option.hasOwnProperty("ok") && typeof option.ok === "function") {
                this.inner_ok = option.ok;
            }
            if (option.hasOwnProperty("cancel") && typeof option.cancel === "function") {
                this.inner_cancel = option.cancel;
            }
        },
        ok() {
            this.$emit("ok");
            if (this.inner_ok) {
                this.inner_ok();
            }
            this.close();
        },
        cancel() {
            this.$emit("cancel");
            if (this.inner_cancel) {
                this.inner_cancel();
            }
            this.close();
        },
        close() {
            this.inner_show = false;
            this.$emit("input", false);
            this.$emit("close");
        },
    },
    mounted() {
        this.open();
    },
    computed: {
        iconClass: {
            get() {
                switch (this.inner_type) {
                    case "info":
                        return "ri-information-fill";
                    case "success":
                        return "ri-checkbox-circle-fill";
                    case "warning":
                        return "ri-error-warning-fill";
                    case "error":
                        return "ri-close-circle-fill";
                    case "confirm":
                        return "ri-question-fill";
                    default:
                        return "";
                }
            }
        },
        iconColor: {
            get() {
                switch (this.inner_type) {
                    case "info":
                        return "#2db7f5";
                    case "success":
                        return "#19be6b";
                    case "warning":
                        return "#ff9900";
                    case "error":
                        return "#ed4014";
                    case "confirm":
                        return "#ed4014";
                    default:
                        return "";
                }
            }
        },
    },
};
</script>
