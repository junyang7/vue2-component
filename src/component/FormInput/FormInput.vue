<template>
    <div style="display: flex; align-items: center;">

        <!--文案-->
        <div
            :style="computed_option.label.style"
            class="label">
            {{ label }}
        </div>

        <!--组件-->
        <Input
            :style="computed_option.input.style"
            v-model="computed_value"
            :placeholder="placeholder"></Input>

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
        option: {
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
            default_option: {
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
        computed_option: {
            get() {
                return jc._Object.merge(this.default_option, this.option);
            },
        }
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
