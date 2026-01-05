<template>
    <div>

        <div style="margin-bottom: 36px;">
            <div>默认</div>
            <Checkbox
                :option_list="data1.option_list"
                v-model="data1.value"></Checkbox>
        </div>

        <div style="margin-bottom: 36px;">
            <div>自定义：循环遍历option</div>
            <Checkbox
                v-model="data2.value">
                <CheckboxOption
                    v-for="(a,b,c) in data2.option_list"
                    :key="a.value"
                    :label="a.label"
                    :value="a.value"
                    :activated="data2.value.includes(a.value)"></CheckboxOption>
            </Checkbox>
        </div>

        <div style="margin-bottom: 36px;">
            <div>自定义：手动添加option</div>
            <Checkbox
                v-model="data3.value">
                <CheckboxOption
                    :label="data3.option_list[0].label"
                    :value="data3.option_list[0].value"
                    :activated="data3.value.includes(data3.option_list[0].value)"></CheckboxOption>
                <CheckboxOption
                    :label="data3.option_list[1].label"
                    :value="data3.option_list[1].value"
                    :activated="data3.value.includes(data3.option_list[1].value)"></CheckboxOption>
                <CheckboxOption
                    :label="data3.option_list[2].label"
                    :value="data3.option_list[2].value"
                    :activated="data3.value.includes(data3.option_list[2].value)"></CheckboxOption>
                <CheckboxOption
                    :label="data3.option_list[3].label"
                    :value="data3.option_list[3].value"
                    :activated="data3.value.includes(data3.option_list[3].value)"></CheckboxOption>
            </Checkbox>
        </div>

        <div style="margin-bottom: 36px;">
            <div>自定义：循环遍历option</div>
            <Checkbox
                v-model="data4.value">
                <CheckboxOption
                    v-for="(a,b,c) in data4.option_list"
                    :key="a.value"
                    :label="a.label"
                    :value="a.value">
                    <div style="display: flex; align-items: center; justify-content: center; height: 36px;">
                        <div v-if="data4.value.includes(a.value)" style="color: #ed4014;">
                            <i class="ri-checkbox-multiple-fill"></i>
                        </div>
                        <div v-else>
                            <i class="ri-checkbox-multiple-blank-line"></i>
                        </div>
                        <div>{{ a.label }}</div>
                        <div v-if="a.value === 2">
                            <Tag type="warning" size="small">我的最爱</Tag>
                        </div>
                    </div>
                </CheckboxOption>
            </Checkbox>
        </div>

        <div style="margin-bottom: 36px;">
            <div>调整布局</div>
            <Checkbox
                style="display: inline-flex; column-gap: 18px;"
                :option_list="data5.option_list"
                v-model="data5.value"></Checkbox>
        </div>

    </div>
</template>

<script>
export default {
    name: "TestCheckbox",
    data() {
        return {
            data1: {
                placeholder: "请选择",
                value: [0,],
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
            },
            data2: {
                placeholder: "请选择",
                value: [0,],
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
            },
            data3: {
                placeholder: "请选择",
                value: [0,],
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
            },
            data4: {
                placeholder: "请选择",
                value: [0,],
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
            },
            data5: {
                placeholder: "请选择",
                value: [0,],
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
            },
        };
    },
}
</script>

<style scoped>

</style>
