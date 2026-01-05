<template>
    <button
        @click="click"
        :class="c">
        <slot></slot>
    </button>
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
            default: "default",
        },
    },
    data(){
        return {

        };
    },
    methods: {
        click() {
            this.$emit("click");
        },
    },
    computed: {
        c: {
            get() {
                return {
                    "tag": true,
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
    padding: 0px;
    margin: 0px;
}

.size-small {
    padding: 0 4px;
    height: 20px;
    font-size: 12px;
}

.size-default {
    padding: 0 8px;
    height: 30px;
    font-size: 14px;
}

.size-large {
    padding: 0 12px;
    height: 40px;
    font-size: 16px;
}

.type-default {
    background-color: #ffffff;
    border: 1px solid #e8eaec;
    color: #515a6e;
}

.type-default:hover {
    opacity: 0.9;
}

.type-text {
    background-color: transparent;
    border: 1px solid transparent;
    color: #515a6e;
}

.type-text:hover {
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
    background-color: rgba(45, 140, 240, 0.9);
    border: 1px solid rgba(45, 140, 240, 1);
    color: #ffffff;
}

.type-primary:hover {
    opacity: 0.9;
}

.type-success {
    background-color: rgba(25, 190, 107, 0.9);
    border: 1px solid rgba(25, 190, 107, 1);
    color: #ffffff;
}

.type-success:hover {
    opacity: 0.9;
}

.type-warning {
    background-color: rgba(255, 153, 0, 0.9);
    border: 1px solid rgba(255, 153, 0, 1);
    color: #ffffff;
}

.type-warning:hover {
    opacity: 0.9;
}

.type-error {
    background-color: rgba(237, 64, 20, 0.9);
    border: 1px solid rgba(237, 64, 20, 1);
    color: #ffffff;
}

.type-error:hover {
    opacity: 0.9;
}

.type-editor {
    background-color: transparent;
    border: 1px solid transparent;
    color: #ffffff;
}

.type-editor:hover {
    opacity: 0.9;
}

</style>
