<template>
    <div
        @radio-option-click="RadioOptionClick"
        class="component">
        <slot>
            <RadioOption
                v-for="(a,b,c) in option_list"
                :key="a[option_value_name]"
                :activated="value === a[option_value_name]"
                :disabled="disabled"
                :value="a[option_value_name]"
                :label="a[option_label_name]"></RadioOption>
        </slot>
    </div>
</template>

<script>
import RadioOption from "../RadioOption/RadioOption.vue";

export default {
    name: "Radio",
    components: {RadioOption},
    props: {
        value: {
            type: null,
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        option_list: {
            type: Array,
            default() {
                return [
                    // {
                    //     label: "全部",
                    //     value: 0,
                    // },
                ];
            },
        },
        option_label_name: {
            type: String,
            default: "label",
        },
        option_value_name: {
            type: String,
            default: "value",
        },
    },
    methods: {
        RadioOptionClick(value) {
            if (this.disabled) {
                return;
            }
            this.$emit("input", value);
        },
    },
    provide() {
        return {
            context: this,
        };
    },
}
</script>

<style scoped>
.component {
    color: #515a6e;
    font-size: 14px;
}
</style>
