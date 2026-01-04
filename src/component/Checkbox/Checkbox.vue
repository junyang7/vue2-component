<template>
    <div
        @checkbox-option-click="CheckboxOptionClick"
        class="component">
        <slot>
            <div
                v-for="(a,b,c) in option_list">
                <CheckboxOption
                    :activated="value.includes(a[option_value_name])"
                    :value="a[option_value_name]"
                    :label="a[option_label_name]"></CheckboxOption>
            </div>
        </slot>
    </div>
</template>

<script>
import CheckboxOption from "../CheckboxOption/CheckboxOption.vue";
import jc from "js-common"

export default {
    name: "Checkbox",
    components: {CheckboxOption},
    props: {
        value: {
            type: Array,
            default: [],
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
            inner_value: [],
        };
    },
    methods: {
        CheckboxOptionClick(value) {
            const index = this.inner_value.indexOf(value);
            if (index !== -1) {
                this.inner_value.splice(index, 1);
            } else {
                this.inner_value.push(value);
            }
            this.$emit("input", this.inner_value);
        }
    },
    mounted() {
        this.inner_value = this.value;
        jc._VueEvent.consume("checkbox-option-click", this.CheckboxOptionClick);
    },
    beforeDestroy() {
        jc._VueEvent.destroy("checkbox-option-click", this.CheckboxOptionClick);
    },
}
</script>

<style scoped>
.component {
    color: #515a6e;
    font-size: 14px;
}
</style>
