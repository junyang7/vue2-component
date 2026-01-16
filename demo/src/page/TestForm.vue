<template>
    <div>

        <div style="margin-bottom: 36px;">
            <div>size</div>
            <div style="display: flex; align-items: center; justify-content: flex-start; column-gap: 9px;">

                <Form
                    @cancel="cancel"
                    @confirm="confirm"
                    :search="data1.search"></Form>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "TestForm",
    data() {
        return {
            data1: {
                search: {
                    name: {
                        key: "name",
                        type: "input",
                        label: "环境名称",
                        placeholder: "",
                        value: "",
                        default: "",
                    },
                    mode_id: {
                        key: "mode_id",
                        type: "select",
                        label: "部署模式",
                        placeholder: "",
                        value: 0,
                        default: 0,
                        option_list: [
                            {
                                label: "全部",
                                value: 0,
                            },
                            {
                                label: "内网",
                                value: 1,
                            },
                            {
                                label: "仿真",
                                value: 2,
                            },
                        ],
                    },
                    server_id: {
                        key: "server_id",
                        type: "select",
                        label: "部署位置",
                        placeholder: "",
                        value: 0,
                        default: 0,
                        option_list: [
                            {
                                label: "全部",
                                value: 0,
                            },
                            {
                                label: "10.185.7.230",
                                value: 1,
                            },
                            {
                                label: "10.217.11.104",
                                value: 2,
                            },
                            {
                                label: "10.217.11.105",
                                value: 3,
                            },
                            {
                                label: "10.185.28.150",
                                value: 4,
                            },
                            {
                                label: "10.217.11.40",
                                value: 5,
                            },
                        ],
                    },
                    user_id: {
                        key: "user_id",
                        type: "select",
                        label: "创建者",
                        placeholder: "",
                        value: 0,
                        default: 0,
                        option_list: [
                            {
                                label: "全部",
                                value: 0,
                            },
                            {
                                label: "郭俊阳",
                                value: 1,
                            },
                            {
                                label: "刘泽明",
                                value: 2,
                            },
                            {
                                label: "张霄",
                                value: 3,
                            },
                        ],
                    },
                    state: {
                        key: "state",
                        type: "select",
                        label: "运行状态",
                        placeholder: "",
                        value: 0,
                        default: 0,
                        option_list: [
                            {
                                label: "全部",
                                value: 0,
                            },
                            {
                                label: "部署中",
                                value: 1,
                            },
                            {
                                label: "运行中",
                                value: 2,
                            },
                            {
                                label: "已停止",
                                value: 3,
                            },
                        ],
                    },
                    create_datetime: {
                        key: "create_datetime",
                        type: "datetime_se",
                        label: "创建时间",
                        placeholder: {
                            s: "",
                            e: "",
                        },
                        value: {
                            s: "",
                            e: "",
                        },
                        default: {
                            s: "",
                            e: "",
                        },
                    },
                },
            },
        };
    },
    methods: {
        cancel() {
            console.log("====cancel")
            console.log(JSON.stringify(this.data1.search, null, 2))
        },
        confirm() {
            console.log("====confirm")
            console.log(JSON.stringify(this.data1.search, null, 2))
        },
    },
}
</script>

<style scoped>

</style>
