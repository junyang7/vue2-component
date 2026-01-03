<template>
    <div>

        <div style="margin-bottom: 36px;">
            <Button
                @click="ButtonClickShow"
                type="primary">打开loading，5秒后关闭
            </Button>
        </div>

    </div>
</template>

<script>
export default {
    name: "TestLoading",
    data() {
        return {};
    },
    methods: {
        ButtonClickShow() {
            this.$Loading.show();
            setTimeout(() => {
                this.$Loading.hide();
            }, 5000);
        },
    },
}
</script>

<style scoped>

</style>
