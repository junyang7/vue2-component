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
                    label: "TestAce",
                    url: "/TestAce",
                },
                {
                    label: "TestAvatar",
                    url: "/TestAvatar",
                },
                {
                    label: "TestBreadcrumb",
                    url: "/TestBreadcrumb",
                },
                {
                    label: "TestButton",
                    url: "/TestButton",
                },
                {
                    label: "TestCheckbox",
                    url: "/TestCheckbox",
                },
                {
                    label: "TestContextmenu",
                    url: "/TestContextmenu",
                },
                {
                    label: "TestCopy",
                    url: "/TestCopy",
                },
                {
                    label: "TestDatetime",
                    url: "/TestDatetime",
                },
                {
                    label: "TestDropdown",
                    url: "/TestDropdown",
                },
                {
                    label: "TestForm",
                    url: "/TestForm",
                },
                {
                    label: "TestFormAce",
                    url: "/TestFormAce",
                },
                {
                    label: "TestFormInput",
                    url: "/TestFormInput",
                },
                {
                    label: "TestInput",
                    url: "/TestInput",
                },
                {
                    label: "TestLoading",
                    url: "/TestLoading",
                },
                {
                    label: "TestMenu",
                    url: "/TestMenu",
                },
                {
                    label: "TestMessage",
                    url: "/TestMessage",
                },
                {
                    label: "TestModal",
                    url: "/TestModal",
                },
                {
                    label: "TestPage",
                    url: "/TestPage",
                },
                {
                    label: "TestRadio",
                    url: "/TestRadio",
                },
                {
                    label: "TestSelect",
                    url: "/TestSelect",
                },
                {
                    label: "TestTag",
                    url: "/TestTag",
                },
            ],
        };
    },
}
</script>

<style scoped>

</style>
