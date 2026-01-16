<template>
    <div style="display: flex; align-items: center; width: 510px">

        <!--文案-->
        <div class="label">
            {{ label }}
        </div>

        <!--组件-->
        <DatetimeSE
            style="width: 410px"
            v-model="innerValue"
            :placeholder="placeholder"
            :type="type"></DatetimeSE>

    </div>
</template>

<script>
import DatetimeSE from "../DatetimeSE/DatetimeSE.vue";

export default {
    name: "FormDatetimeSE",
    components: {DatetimeSE},
    props: {
        label: {
            type: String,
            default: "",
        },
        value: {
            type: Object,
            default: () => ({
                s: "",
                e: "",
            }),
        },
        placeholder: {
            type: Object,
            default: () => ({
                s: "",
                e: "",
            }),
        },
        type: {
            type: String,
            default: "datetime",
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
        },
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
}
</style>

