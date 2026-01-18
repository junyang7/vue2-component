<template>
    <div style="display: flex; align-items: center;">

        <!--文案-->
        <div
            :style="computed_setting.label.style"
            class="label">
            {{ label }}
        </div>

        <!--组件-->
        <Input
            :style="computed_setting.input.style"
            :placeholder="placeholder"
            v-model="computed_value"></Input>

    </div>
</template>

<script>
export default {
    name: "FormInput",
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
        setting: {
            type: Object,
            default() {
                return {
                    label: {},
                    input: {},
                };
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
                input: {
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
