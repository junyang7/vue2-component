<template>
    <div
        @contextmenu.prevent="test1($event)" style=" width: 100%; height: 100%;">

        <Contextmenu
            @click="click"
            :setting="data1.setting"
            v-model="data1.show"></Contextmenu>

    </div>
</template>

<script>
export default {
    name: "TestContextmenu",
    data() {
        return {
            data1: {
                show: false,
                setting: {
                    x: 0,
                    y: 0,
                    menu_list: [
                        {
                            divider: false,
                            type: 1,
                            icon_class: "ri-delete-bin-2-line",
                            icon_img_src: "https://code.visualstudio.com/assets/favicon.ico",
                            name: "打开code-server编辑器",
                            id: 1,
                            color: "#e8eaec",
                        },
                        {
                            divider: false,
                            type: 1,
                            icon_class: "ri-delete-bin-2-line",
                            icon_img_src: "",
                            name: "删除",
                            id: 1,
                            color: "#ed4014",
                        },
                        {
                            divider: true,
                        },
                        {
                            divider: false,
                            type: 1,
                            icon_class: "ri-magic-line",
                            icon_img_src: "",
                            name: "克隆环境",
                            id: 2,
                            color: "#2d8cf0",
                        },
                        {
                            divider: true,
                            type: 2,
                            icon_class: "",
                            icon_img_src: "",
                            name: "",
                            id: 0,
                            color: "",
                        },
                        {
                            divider: false,
                            type: 1,
                            icon_class: "ri-file-copy-line",
                            icon_img_src: "",
                            name: "复制主机端口",
                            id: 2,
                            color: "#808695",
                        },
                        {
                            divider: false,
                            type: 1,
                            icon_class: "ri-file-copy-line",
                            icon_img_src: "",
                            name: "复制支付地址",
                            id: 2,
                            color: "#808695",
                        },
                    ],
                },
            },
        };
    },
    methods: {
        test1(e) {
            this.data1.setting.x = e.clientX;
            this.data1.setting.y = e.clientY;
            this.data1.show = true;

        },
        click(menu) {
            console.log(menu)
        },
    },
}
</script>

<style scoped>

</style>
