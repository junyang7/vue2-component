<template>
    <div>
        <div>TestBreadcrumb</div>
        <div>
            <Breadcrumb :list="list"></Breadcrumb>
        </div>
    </div>
</template>

<script>
export default {
    name: "TestBreadcrumb",
    data() {
        return {
            list: [
                {
                    label: "首页",
                    to: "/",
                },
                {
                    label: "测试1",
                    to: "/",
                },
                {
                    label: "测试2",
                    to: "/",
                },
            ],
        };
    },
}
</script>

<style scoped>

</style>
