<template>
    <div
        ref="avatar"
        :class="c">

        <!--图片-->
        <img
            v-if="computed_display === 'url'"
            :src="url"/>

        <!--图标-->
        <i
            v-else-if="computed_display === 'icon'"
            :class="icon"></i>

        <!--文本-->
        <span
            v-else
            ref="label"
            class="label">
            <slot
                name="label">{{ label }}</slot>
        </span>

    </div>
</template>

<script>
export default {
    name: "Avatar",
    props: {
        size: {
            type: String,
            default: "default",
        },
        type: {
            type: String,
            default: "default",
        },
        label: {
            type: String,
            default: "",
        },
        icon: {
            type: String,
            default: "",
        },
        url: {
            type: String,
            default: "",
        },
    },
    mounted() {
        if (this.url) {
            this.label = "";
            this.icon = "";
        }
        if (this.icon) {
            this.label = "";
        }
        if (this.label) {
            this.$nextTick(() => {
                this.updateScale();
            });
        }
    },
    methods: {
        getGap() {
            if (this.size === "small") {
                return 8;
            }

            if (this.size === "large") {
                return 14;
            }

            return 10;
        },
        updateScale() {
            const avatar = this.$refs.avatar;
            const label = this.$refs.label;
            if (!avatar || !label) {
                return;
            }
            label.style.transform = "scale(1)";
            const avatarWidth = avatar.clientWidth;
            const labelWidth = label.scrollWidth;
            if (labelWidth === 0) {
                return;
            }
            const gap = this.getGap();
            let scale = (avatarWidth - gap) / labelWidth;
            if (scale > 1) {
                scale = 1;
            }
            if (scale < 0) {
                scale = 0;
            }
            label.style.transform = "scale(" + scale + ")";
        },
    },
    computed: {
        computed_display: {
            get() {
                if (this.url) {
                    return "url";
                }
                if (this.icon) {
                    return "icon";
                }
            },
        },
        c: {
            get() {
                return {
                    "avatar": true,
                    "size-default": this.size === "" || this.size === "default",
                    "size-small": this.size === "small",
                    "size-large": this.size === "large",
                    "type-default": this.type === "" || this.type === "default",
                    "type-text": this.type === "" || this.type === "text",
                    "type-info": this.type === "" || this.type === "info",
                    "type-primary": this.type === "" || this.type === "primary",
                    "type-success": this.type === "" || this.type === "success",
                    "type-warning": this.type === "" || this.type === "warning",
                    "type-error": this.type === "" || this.type === "error",
                    "type-editor": this.type === "" || this.type === "editor",
                };
            }
        },
    },
}
</script>

<style scoped>
.avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    width: 36px;
    height: 36px;
    border-radius: 100%;
    overflow: hidden;
}

.label {
    display: inline-block;
    white-space: nowrap;
    transform-origin: center center;
    font-size: inherit;
}

.size-small {
    height: 20px;
    width: 20px;
    font-size: 12px;
}

.size-default {
    height: 36px;
    width: 36px;
    font-size: 14px;
}

.size-large {
    height: 52px;
    width: 52px;
    font-size: 32px;
}

.type-default {
    background-color: #ffffff;
    border: 1px solid #e8eaec;
    color: #515a6e;
}

.type-default:hover {
    opacity: 0.9;
}

.type-info {
    background-color: rgba(45, 183, 245, 0.9);
    border: 1px solid rgba(45, 183, 245, 1);
    color: #ffffff;
}

.type-info:hover {
    opacity: 0.9;
}

.type-primary {
    background-color: rgba(45, 140, 240, 0.2);
    border: 1px solid rgba(45, 140, 240, 1);
    color: rgba(45, 140, 240, 1);
}

.type-primary:hover {
    opacity: 0.9;
}

.type-success {
    background-color: rgba(25, 190, 107, 0.2);
    border: 1px solid rgba(25, 190, 107, 1);
    color: rgba(25, 190, 107, 1);
}

.type-success:hover {
    opacity: 0.9;
}

.type-warning {
    background-color: rgba(255, 153, 0, 0.2);
    border: 1px solid rgba(255, 153, 0, 1);
    color: rgba(255, 153, 0, 1);
}

.type-warning:hover {
    opacity: 0.9;
}

.type-error {
    background-color: rgba(237, 64, 20, 0.2);
    border: 1px solid rgba(237, 64, 20, 1);
    color: rgba(237, 64, 20, 1);
}

.type-error:hover {
    opacity: 0.9;
}

img {
    display: block;
    width: 100%;
    height: 100%;
}
</style>
