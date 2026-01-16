<template>
    <div style="display: flex; align-items: center;">

        <!--文案-->
        <div
            class="label">
            {{ label }}
        </div>

        <!--组件-->
        <Input
            v-model="innerValue"
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
    },
    computed: {
        innerValue: {
            get() {
                return this.value;
            },
            set(v) {
                this.$emit("input", v);
            }
        }
    },
}
</script>

<style scoped>
.label {
    height: 36px;
    width: 100px;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #515a6e;
    box-sizing: border-box;
}
</style>
