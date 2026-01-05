<template>
    <div>

        <div style="margin-bottom: 36px;">
            <div>默认</div>
            <Select
                style="width: 600px;"
                :option_list="test1.option_list"
                :placeholder="test1.placeholder"
                v-model="test1.value"></Select>
        </div>

        <div style="margin-bottom: 36px;">
            <div>默认</div>
            <Select
                :option_list="test2.option_list"
                v-model="test2.value">
                <SelectOption
                    v-for="(a,b,c) in test2.option_list"
                    :key="a.value"
                    :label="a.label"
                    :value="a.value"
                    :activated="test2.value === a.value"></SelectOption>
            </Select>
        </div>

        <div style="margin-bottom: 36px;">
            <div>自定义：手动添加option</div>
            <Select
                :option_list="test3.option_list"
                v-model="test3.value">
                <SelectOption
                    :label="test3.option_list[0].label"
                    :value="test3.option_list[0].value"
                    :activated="test3.value === test3.option_list[0].value"></SelectOption>
                <SelectOption
                    :label="test3.option_list[1].label"
                    :value="test3.option_list[1].value"
                    :activated="test3.value === test3.option_list[1].value"></SelectOption>
                <SelectOption
                    :label="test3.option_list[2].label"
                    :value="test3.option_list[2].value"
                    :activated="test3.value === test3.option_list[2].value"></SelectOption>
                <SelectOption
                    :label="test3.option_list[3].label"
                    :value="test3.option_list[3].value"
                    :activated="test3.value === test3.option_list[3].value"></SelectOption>
            </Select>
        </div>

        <div style="margin-bottom: 36px;">
            <div>自定义：循环遍历option</div>
            <Select
                :option_list="test4.option_list"
                v-model="test4.value">
                <SelectOption
                    v-for="(a,b,c) in test4.option_list"
                    :key="a.value"
                    :label="a.label"
                    :value="a.value"
                    :activated="test4.value === a.value">
                    <div style="display: flex; align-items: center; justify-content: center; height: 36px;">
                        <div v-if="test4.value === a.value" style="color: #ed4014;">
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
            test1: {
                placeholder: "请选择",
                value: 0,
                option_list: [
                    {
                        label: "1全部",
                        value: 0,
                        prefix: "ri-apple-line",
                        suffix: "",
                    },
                    {
                        label: "1苹果",
                        value: 1,
                        prefix: "ri-apple-line",
                        suffix: "",
                    },
                    {
                        label: "1橘子hhhhahhdsahd啊哈说法",
                        value: 2,
                        prefix: "ri-apple-line",
                        suffix: "",
                    },
                    {
                        label: "1香蕉",
                        value: 3,
                        prefix: "ri-apple-line",
                        suffix: "",
                    },
                ],
            },
            test2: {
                placeholder: "请选择",
                value: 0,
                option_list: [
                    {
                        label: "2全部",
                        value: 0,
                        prefix: "ri-apple-line",
                        suffix: "",
                    },
                    {
                        label: "2苹果",
                        value: 1,
                        prefix: "ri-apple-line",
                        suffix: "",
                    },
                    {
                        label: "2橘子hhhhahhdsahd啊哈说法",
                        value: 2,
                        prefix: "ri-apple-line",
                        suffix: "",
                    },
                    {
                        label: "2香蕉",
                        value: 3,
                        prefix: "ri-apple-line",
                        suffix: "",
                    },
                ],
            },
            test3: {
                placeholder: "请选择",
                value: 0,
                option_list: [
                    {
                        label: "3全部",
                        value: 0,
                        prefix: "ri-apple-line",
                        suffix: "",
                    },
                    {
                        label: "3苹果",
                        value: 1,
                        prefix: "ri-apple-line",
                        suffix: "",
                    },
                    {
                        label: "3橘子hhhhahhdsahd啊哈说法",
                        value: 2,
                        prefix: "ri-apple-line",
                        suffix: "",
                    },
                    {
                        label: "3香蕉",
                        value: 3,
                        prefix: "ri-apple-line",
                        suffix: "",
                    },
                ],
            },
            test4: {
                placeholder: "请选择",
                value: 0,
                option_list: [
                    {
                        label: "4全部",
                        value: 0,
                        prefix: "ri-apple-line",
                        suffix: "",
                    },
                    {
                        label: "4苹果",
                        value: 1,
                        prefix: "ri-apple-line",
                        suffix: "",
                    },
                    {
                        label: "4橘子hhhhahhdsahd啊哈说法",
                        value: 2,
                        prefix: "ri-apple-line",
                        suffix: "",
                    },
                    {
                        label: "4香蕉",
                        value: 3,
                        prefix: "ri-apple-line",
                        suffix: "",
                    },
                ],
            },
            test5: {
                placeholder: "请选择",
                value: 0,
                option_list: [
                    {
                        label: "5全部",
                        value: 0,
                        prefix: "ri-apple-line",
                        suffix: "",
                    },
                    {
                        label: "5苹果",
                        value: 1,
                        prefix: "ri-apple-line",
                        suffix: "",
                    },
                    {
                        label: "5橘子hhhhahhdsahd啊哈说法",
                        value: 2,
                        prefix: "ri-apple-line",
                        suffix: "",
                    },
                    {
                        label: "5香蕉",
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
