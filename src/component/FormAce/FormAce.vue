<template>
    <div style="display: flex;">

        <!--文案-->
        <div
            :style="computed_setting.label.style"
            class="label">
            {{ label }}
        </div>

        <!--组件-->
        <Ace
            :option="computed_setting.ace.option"
            :style="computed_setting.ace.style"
            v-model="computed_value"></Ace>

    </div>
</template>

<script>
export default {
    name: "FormAce",
    props: {
        label: {
            type: String,
            default: "",
        },
        value: {
            type: [String, Number,],
            default: "",
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
                ace: {
                    style: {
                        width: "480px",
                        height: "360px",
                        fontSize: "14px",
                        color: "#515a6e",
                    },
                    option: {
                        autoHeight: true,
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
