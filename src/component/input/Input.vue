<template>
    <input
        v-model="computed_value"
        :placeholder="placeholder"/>
</template>

<script>
export default {
    name: "Input",
    props: {
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
        computed_value: {
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
input {
    display: block;
    width: 100%;
    line-height: 36px;
    height: 36px;
    background-color: #ffffff;
    border: 1px solid #dcdee2;
    border-radius: 2px;
    padding: 4px;
    appearance: none;
    box-sizing: border-box;
    margin: 0;
    outline-style: none;
    color: #515a6e;
}

input:focus {
    border-color: #57a3f3;
    box-shadow: 0 0 4px 2px rgba(45, 140, 240, 0.5);
}
</style>
