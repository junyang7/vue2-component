<template>
    <div>
        <Select
            :option_list="option_list"
            :placeholder="placeholder"
            v-model="value"></Select>
        <div>11111</div>
    </div>
</template>

<script>
export default {
    name: "TestSelect",
    data() {
        return {
            placeholder: "请选择",
            value: 0,
            option_list: [
                {
                    label: "全部",
                    value: 0,
                    prefix: "ri-apple-line",
                    suffix: "",
                },
                {
                    label: "苹果",
                    value: 1,
                    prefix: "ri-apple-line",
                    suffix: "",
                },
                {
                    label: "橘子",
                    value: 2,
                    prefix: "ri-apple-line",
                    suffix: "",
                },
                {
                    label: "香蕉",
                    value: 3,
                    prefix: "ri-apple-line",
                    suffix: "",
                },
            ],
        };
    },
}
</script>

<style scoped>

</style>
