<template>
    <div style="display: flex; align-items: center; width: 300px">

        <!--文案-->
        <div class="label">
            {{ label }}
        </div>

        <!--组件-->
        <Datetime
            style="width: 200px"
            v-model="innerValue"
            :placeholder="placeholder"
            :type="type"></Datetime>

    </div>
</template>

<script>
import Datetime from "../Datetime/Datetime.vue";

export default {
    name: "FormDatetime",
    components: {Datetime},
    props: {
        label: {
            type: String,
            default: "",
        },
        value: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
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
