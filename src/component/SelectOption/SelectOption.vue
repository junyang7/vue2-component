<template>
    <div
        class="component-select-option"
        @click="SelectOptionClick">
        <slot>
            <div class="component-select-option-label">{{ label }}</div>
        </slot>
    </div>
</template>

<script>
export default {
    name: "SelectOption",
    inject: ["context"],
    props: {
        label: {
            type: String,
            default: "",
        },
        value: {
            type: null,
            default: null,
        },
        activated: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        SelectOptionClick() {
            if (this.context) {
                this.context.SelectOptionClick(this.value);
            }
        },
    },
}
</script>

<style scoped>
.component-select-option {
    display: flex;
    align-items: center;
    height: 36px;
    width: 100%;
    box-sizing: border-box;
}

.component-select-option:hover {
    background-color: rgba(255, 255, 0, 0.2);
}

.component-select-option-label {
    color: #808695;
    padding: 0 8px;
    height: 36px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: 14px;
}

</style>
