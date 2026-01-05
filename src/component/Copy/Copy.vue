<template>
    <div class="component-copy">
        <slot></slot>
        <i
            :class="`component-copy-icon ${done ? 'ri-check-line' : 'ri-file-copy-line'}`"
            @click="copy"
            title="复制"></i>
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
            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(this.data);
                } else {
                    const textarea = document.createElement("textarea");
                    textarea.value = this.data;
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
