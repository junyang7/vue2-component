<template>
    <div>

        <div style="margin-bottom: 36px;">
            <div>默认</div>
            <Select
                style="width: 600px;"
                :option_list="option_list"
                :placeholder="placeholder"
                v-model="value"></Select>
        </div>

        <div style="margin-bottom: 36px;">
            <div>默认</div>
            <Select
                :option_list="option_list"
                v-model="value">
                <SelectOption
                    v-for="(a,b,c) in option_list"
                    :key="a.value"
                    :label="a.label"
                    :value="a.value"
                    :activated="value === a.value"></SelectOption>
            </Select>
        </div>

        <div style="margin-bottom: 36px;">
            <div>自定义：手动添加option</div>
            <Select
                :option_list="option_list"
                v-model="value">
                <SelectOption
                    :label="option_list[0].label"
                    :value="option_list[0].value"
                    :activated="value === option_list[0].value"></SelectOption>
                <SelectOption
                    :label="option_list[1].label"
                    :value="option_list[1].value"
                    :activated="value === option_list[1].value"></SelectOption>
                <SelectOption
                    :label="option_list[2].label"
                    :value="option_list[2].value"
                    :activated="value === option_list[2].value"></SelectOption>
                <SelectOption
                    :label="option_list[3].label"
                    :value="option_list[3].value"
                    :activated="value === option_list[3].value"></SelectOption>
            </Select>
        </div>

        <div style="margin-bottom: 36px;">
            <div>自定义：循环遍历option</div>
            <Select
                :option_list="option_list"
                v-model="value">
                <SelectOption
                    v-for="(a,b,c) in option_list"
                    :key="a.value"
                    :label="a.label"
                    :value="a.value"
                    :activated="value === a.value">
                    <div style="display: flex; align-items: center; justify-content: center; height: 36px;">
                        <div v-if="value === a.value" style="color: #ed4014;">
                            <i class="ri-checkbox-fill"></i>
                        </div>
                        <div v-else>
                            <i class="ri-checkbox-blank-line"></i>
                        </div>
                        <div>{{ a.label }}</div>
                        <div v-if="a.value === 2">
                            <Tag type="error" size="small">我的最爱</Tag>
                        </div>
                    </div>
                </SelectOption>
            </Select>
        </div>

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
                    label: "橘子hhhhahhdsahd啊哈说法",
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
