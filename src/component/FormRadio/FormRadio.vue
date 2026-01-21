<template>
    <div style="display: flex;">

        <!--文案-->
        <div
            :style="computed_setting.label.style"
            class="label">
            {{ label }}
        </div>

        <!--组件-->
        <Radio
            :style="computed_setting.radio.style"
            :option_list="option_list"
            :placeholder="placeholder"
            v-model="computed_value"></Radio>

    </div>
</template>

<script>
import Radio from "../Radio/Radio.vue";

export default {
    name: "FormRadio",
    components: {Radio},
    props: {
        label: {
            type: String,
            default: "",
        },
        value: {
            type: [String, Number,],
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
        option_list: {
            type: Array,
            default: [
                {
                    label: "全部",
                    value: 0,
                },
            ],
        },
        setting: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    data() {
        return {
            default_setting: {
                label: {
                    style: {
                        width: "100px",
                        height: "36px",
                        fontSize: "14px",
                        color: "#515a6e",
                    },
                },
                radio: {
                    style: {
                        width: "200px",
                        height: "36px",
                        fontSize: "14px",
                        color: "#515a6e",
                    },
                },
            },
        };
    },
    computed: {
        computed_value: {
            get() {
                return this.value;
            },
            set(v) {
                this.$emit("input", v);
            },
        },
        computed_setting: {
            get() {
                return jc._Object.merge(this.default_setting, this.setting);
            },
        },
    },
}
</script>

<style scoped>
.label {
    display: flex;
    align-items: center;
    box-sizing: border-box;
}
</style>
