<template>
    <div style="display: flex; align-items: center;">
        <div
            class="label">
            {{ label }}
        </div>
        <Select
            style="width: 200px;"
            :option_list="option_list"
            :placeholder="placeholder"
            v-model="innerValue"></Select>
    </div>
</template>

<script>
export default {
    name: "FormSelect",
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
}
</style>
