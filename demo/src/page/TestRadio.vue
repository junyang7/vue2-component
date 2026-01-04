<template>
    <div>

        <div style="margin-bottom: 36px;">
            <div>默认</div>
            <Radio
                :option_list="option_list"
                v-model="value"></Radio>
        </div>

        <div style="margin-bottom: 36px;">
            <div>自定义：循环遍历option</div>
            <Radio
                v-model="value">
                <template v-for="(a,b,c) in option_list">
                    <RadioOption
                        :label="a.label"
                        :value="a.value"
                        :activated="value === a.value"></RadioOption>
                </template>
            </Radio>
        </div>

        <div style="margin-bottom: 36px;">
            <div>自定义：手动添加option</div>
            <Radio
                v-model="value">
                <RadioOption
                    :label="option_list[0].label"
                    :value="option_list[0].value"
                    :activated="value === option_list[0].value"></RadioOption>
                <RadioOption
                    :label="option_list[1].label"
                    :value="option_list[1].value"
                    :activated="value === option_list[1].value"></RadioOption>
                <RadioOption
                    :label="option_list[2].label"
                    :value="option_list[2].value"
                    :activated="value === option_list[2].value"></RadioOption>
                <RadioOption
                    :label="option_list[3].label"
                    :value="option_list[3].value"
                    :activated="value === option_list[3].value"></RadioOption>
            </Radio>
        </div>

        <div style="margin-bottom: 36px;">
            <div>自定义：循环遍历option</div>
            <Radio
                v-model="value">
                <template v-for="(a,b,c) in option_list">
                    <RadioOption
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
                    </RadioOption>
                </template>
            </Radio>
        </div>

        <div style="margin-bottom: 36px;">
            <div>调整布局</div>
            <Radio
                style="display: inline-flex; column-gap: 18px;"
                :option_list="option_list"
                v-model="value"></Radio>
        </div>

    </div>
</template>

<script>
export default {
    name: "TestRadio",
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
