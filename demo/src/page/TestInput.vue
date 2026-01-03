<template>
    <div>

        <div style="margin-bottom: 36px;">
            <div>默认值</div>
            <Input
                v-model="value"/>
        </div>

        <div style="margin-bottom: 36px;">
            <div>默认提示</div>
            <Input
                :placeholder="placeholder"/>
        </div>

        <div style="margin-bottom: 36px;">
            <div>动态获取数据框内容</div>
            <Input
                v-model="value"/>
            <Button
                type="primary"
                @click="getNewValue">获取最新输入框值
            </Button>
        </div>

    </div>
</template>

<script>
export default {
    name: "TestInput",
    data() {
        return {
            value: "我是默认值",
            placeholder: "请输入你想输入的内容吧",
        };
    },
    methods: {
        getNewValue() {
            console.log(this.value);
        },
    },
}
</script>

<style scoped>

</style>
