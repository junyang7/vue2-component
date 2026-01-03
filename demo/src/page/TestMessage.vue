<template>
    <div>

        <div style="margin-bottom: 36px;">
            <div>type</div>
            <div style="display: flex; align-items: center; justify-content: flex-start; column-gap: 9px;">
                <Button
                    @click="ButtonClickInfo"
                    type="info">info</Button>
                <Button
                    @click="ButtonClickSuccess"
                    type="success">success</Button>
                <Button
                    @click="ButtonClickWarning"
                    type="warning">warning</Button>
                <Button
                    @click="ButtonClickError"
                    type="error">error</Button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "TestMessage",
    methods: {
        ButtonClickInfo() {
            this.$Message.info("消息");
        },
        ButtonClickSuccess() {
            this.$Message.success("成功");
        },
        ButtonClickWarning() {
            this.$Message.warning("警告");
        },
        ButtonClickError() {
            this.$Message.error("错误");
        },
    }
}
</script>

<style scoped>

</style>
