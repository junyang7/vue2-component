<template>
    <div
        @radio-option-click="RadioOptionClick"
        class="component">
        <slot>
            <div
                v-for="(a,b,c) in option_list">
                <RadioOption
                    :activated="value === a[option_value_name]"
                    :value="a[option_value_name]"
                    :label="a[option_label_name]"></RadioOption>
            </div>
        </slot>
    </div>
</template>

<script>
import RadioOption from "../RadioOption/RadioOption.vue";
import jc from "js-common"

export default {
    name: "Radio",
    components: {RadioOption},
    props: {
        value: {
            type: null,
            default: null,
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
    data() {
        return {
            inner_value: null,
        };
    },
    methods: {
        RadioOptionClick(value) {
            this.$emit("input", value);
        },
    },
    mounted() {
        this.inner_value = this.value;
        jc._VueEvent.consume("radio-option-click", this.RadioOptionClick);
    },
    beforeDestroy() {
        jc._VueEvent.destroy("radio-option-click", this.RadioOptionClick);
    },
}
</script>

<style scoped>
.component {
    color: #515a6e;
    font-size: 14px;
}
</style>
