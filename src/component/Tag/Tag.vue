<template>
    <span
        class="tag"
        @mouseenter="MouseEnter"
        @mouseleave="MouseLeave"
        :style="computedStyle">
        <slot></slot>
    </span>
</template>

<script>
export default {
    name: "Tag",
    props: {
        size: {
            type: String,
            default: "default",
        },
        type: {
            type: String,
            default: "backgroundColor",
        },
        color: {
            type: String,
            default: "#989daa",
        },
        setting: {
            type: Object,
            default() {
                return {
                    style: {
                        default: {},
                        hover: {},
                    },
                };
            },
        },
    },
    data() {
        return {
            hover: false,
        };
    },
    methods: {
        MouseEnter() {
            this.hover = true;
        },
        MouseLeave() {
            this.hover = false;
        },
    },
    computed: {
        computedStyle: {
            get() {
                let style = {};
                let rgb = jc._Color.convertHexToRgb(this?.template?.color?.[this?.color] || this.color || "#989daa");
                switch (this.type) {
                    case "border":
                        style.border = `1px solid rgba(${rgb},1)`;
                        style.color = `rgba(${rgb},1)`;
                        break;
                    case "borderAndBackgroundColor":
                        style.border = `1px solid rgba(${rgb},1)`;
                        style.backgroundColor = `rgba(${rgb},0.1)`;
                        style.color = `rgba(${rgb},1)`;
                        break;
                    default:
                        style.backgroundColor = `rgba(${rgb},1)`;
                        style.color = `#ffffff`;
                        break;
                }
                if (this?.color && this.color === "default") {
                    style.color = `#989daa`;
                }
                if (this?.size) {
                    if (this?.template?.size?.[this?.size]) {
                        style = {
                            ...style,
                            ...this.template.size[this.size],
                        };
                    }
                }
                if (this?.setting?.style?.default) {
                    style = {
                        ...style,
                        ...this.setting.style.default,
                    };
                }
                if (this.hover) {
                    if (this?.setting?.style?.hover) {
                        style = {
                            ...style,
                            ...this.setting.style.hover,
                        };
                    }
                }
                return style;
            },
        },
    },
    created() {
        this.template = {
            size: {
                small: {
                    padding: "0 4px",
                    height: "20px",
                    fontSize: "12px",
                },
                default: {
                    padding: "0 8px",
                    height: "28px",
                    fontSize: "14px",
                },
                large: {
                    padding: "0 12px",
                    height: "36px",
                    fontSize: "16px",
                },
            },
            color: {
                default: "#989daa",
                primary: "#2d8cf0",
                success: "#19be6b",
                error: "#ed4014",
                warning: "#ff9900",
                magenta: "#eb2f96",
                red: "#f5222d",
                volcano: "#fa541c",
                orange: "#fa8c16",
                gold: "#faad14",
                yellow: "#fadb14",
                lime: "#a0d911",
                green: "#52c41a",
                cyan: "#13c2c2",
                blue: "#1890ff",
                geekblue: "#2f54eb",
                purple: "#722ed1",
            },
        };
    },
}
</script>

<style scoped>
.tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    border-radius: 2px;
    outline: none;
    white-space: nowrap;
    appearance: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.tag:hover {
    opacity: 0.8;
}
</style>
