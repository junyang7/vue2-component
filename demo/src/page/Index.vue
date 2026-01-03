<template>
    <div style="position: absolute; left: 0; top: 0; right: 0; bottom: 0;">
        <div style="position: absolute; left: 0; top: 0; width: 200px; bottom: 0; border-right: 1px solid red; padding: 36px; box-sizing: border-box;">
            <template v-for="(a,b,c) in component_list">
                <router-link :to="a.url">
                    <div>{{ a.label}}</div>
                </router-link>
            </template>
        </div>
        <div style="position: absolute; left: 200px; top: 0; right: 0; bottom: 0; overflow-y: auto; padding: 36px; box-sizing: border-box;">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
    name: "Index",
    data(){
        return {
            component_list: [
                {
                    label: "头像",
                    url: "/avatar",
                },
                {
                    label: "按钮",
                    url: "/button",
                },
                {
                    label: "单文本输入框",
                    url: "/input",
                },
                {
                    label: "加载中",
                    url: "/loading",
                },
                {
                    label: "消息",
                    url: "/message",
                },
                {
                    label: "弹框",
                    url: "/modal",
                },
                {
                    label: "下拉框",
                    url: "/select",
                },
                {
                    label: "标签",
                    url: "/tag",
                },
            ],
        };
    },
}
</script>

<style scoped>

</style>
