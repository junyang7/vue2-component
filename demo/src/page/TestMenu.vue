<template>
    <div>

        <div style="margin-bottom: 36px;">
            <div>size</div>
            <div style="width: 300px;">
                <Menu
                    @click="MenuClick"
                    :setting="data1.setting"
                    :option_list="data1.option_list"
                    v-model="data1.value"></Menu>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "TestMenu",
    data() {
        return {
            data1: {
                value: 111,
                setting: {
                    label: "label",
                    value: "id",
                },
                option_list: [
                    {
                        id: 1,
                        label: "菜单1",
                        to: "/test",
                        prefix: "ri-home-line",
                        children: [
                            {
                                id: 11,
                                label: "菜单1-1",
                                to: "",
                                prefix: "ri-profile-line",
                                children: [
                                    {
                                        id: 111,
                                        label: "菜单1-1-1",
                                        to: "",
                                        prefix: "ri-chat-ai-line",
                                    },
                                ],
                            },
                            {
                                id: 12,
                                label: "菜单1-2",
                                to: "",
                                prefix: "ri-layout-line",
                                children: [],
                            },
                        ],
                    },
                    {
                        id: 2,
                        label: "菜单2",
                        to: "",
                        prefix: "ri-focus-2-fill",
                        children: [
                            {
                                id: 21,
                                label: "菜单2-1",
                                to: "",
                                prefix: "ri-issues-reopen-line",
                                children: [
                                    {
                                        id: 211,
                                        label: "菜单2-1-1",
                                        to: "",
                                        prefix: "ri-puzzle-line",
                                    },
                                ],
                            },
                            {
                                id: 22,
                                label: "菜单2-2",
                                to: "",
                                prefix: "ri-instance-line",
                                children: [
                                    {
                                        id: 221,
                                        label: "菜单2-2-1",
                                        to: "",
                                        prefix: "ri-rotate-lock-line",
                                    },
                                    {
                                        id: 222,
                                        label: "菜单2-2-2",
                                        to: "",
                                        prefix: "ri-file-marked-line",
                                    }
                                ],
                            },
                        ],
                    },
                ],
            },
        };
    },
    methods: {
        MenuClick(menu) {
            if (menu.to) {
                this.$router.push({path: menu.to})
            }
        },
    },
}
</script>

<style scoped>

</style>
