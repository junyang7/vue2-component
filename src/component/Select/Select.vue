<template>
    <div
        class="component-checkbox"
        :class="{
            disabled: disabled,
        }"
        ref="component-checkbox">

        <!--TODO 展示组件-->
        <div class="component-checkbox-select" @click="SelectClick">
            <div class="component-checkbox-select-label">{{ computed_option?.[option_label_name] || "" }}</div>
            <div
                class="default"
                :class="{
                    disabled: disabled,
                }"
                style="font-size: 16px; background-color: transparent">
                <i class="ri-arrow-down-s-line"></i>
            </div>
        </div>

        <!--组件：选项-->
        <div v-if="show_option_list" class="component-checkbox-option-list">
            <slot>
                <SelectOption
                    v-for="(a,b,c) in option_list"
                    :key="a[option_value_name]"
                    :activated="value === a[option_value_name]"
                    :value="a[option_value_name]"
                    :label="a[option_label_name]"></SelectOption>
            </slot>
        </div>

    </div>
</template>

<script>
import SelectOption from "../SelectOption/SelectOption.vue";

export default {
    name: "Select",
    components: {SelectOption},
    props: {
        value: {
            type: null,
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
            default: "",
        },
        option_list: {
            type: Array,
            default() {
                return [
                    {
                        label: "全部",
                        value: 0,
                    },
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
            show_option_list: false,
        };
    },
    methods: {
        SelectClick() {
            if (this.disabled) {
                return;
            }
            this.show_option_list = true;
        },
        SelectOptionClick(value) {
            if (this.disabled) {
                return;
            }
            this.$emit("input", value);
            this.show_option_list = false;
        },
        DocumentEventMousedown(event) {
            if (this.disabled) {
                return;
            }
            const component = this.$refs["component-checkbox"];
            if (component && !component.contains(event.target)) {
                this.show_option_list = false;
            }
        },
    },
    computed: {
        computed_option: {
            get() {
                if (Array.isArray(this.option_list)) {
                    for (let i = 0; i < this.option_list.length; i++) {
                        const option = this.option_list[i];
                        if (option[this.option_value_name] === this.value) {
                            return option;
                        }
                    }
                }
                return this.option_list[0];
            },
        }
    },
    mounted() {
        document.addEventListener("mousedown", this.DocumentEventMousedown);
    },
    beforeDestroy() {
        document.removeEventListener("mousedown", this.DocumentEventMousedown);
    },
    provide() {
        return {
            context: this,
        };
    },
}
</script>

<style scoped>
.component-checkbox {
    cursor: default;
    position: relative;
    border-radius: 2px;
    line-height: 36px;
    box-sizing: border-box;
    font-size: 14px;
    display: inline-block;
    color: #515a6e;
    /*min-width: 108px;*/
    height: 36px;
}

.component-checkbox-select {
    border: 1px solid #dcdee2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 8px;
    height: 36px;
    box-sizing: border-box;
}

.component-checkbox-select-label {
    padding: 0 8px;
}

.component-checkbox-option-list {
    position: absolute;
    box-sizing: border-box;
    border: 1px solid #dcdee2;
    background-color: #ffffff;
    width: 100%;
    height: auto;
    max-height: 360px;
    overflow-y: auto;
    word-break: keep-all;
    white-space: nowrap;
    z-index: 1;
}

.default {
    color: #808695;
}

.disabled {
    background-color: #f5f7fa;
    color: #c5c8ce;
    cursor: not-allowed;
}
</style>
