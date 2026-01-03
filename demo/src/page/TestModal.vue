<template>
    <div>

        <div style="margin-bottom: 36px;">
            <div style="display: flex; align-items: center; justify-content: flex-start; column-gap: 9px;">
                <Button
                    @click="ButtonClickInfo"
                    type="info">消息
                </Button>
                <Button
                    @click="ButtonClickSuccess"
                    type="success">成功
                </Button>
                <Button
                    @click="ButtonClickWarning"
                    type="warning">警告
                </Button>
                <Button
                    @click="ButtonClickError"
                    type="error">错误
                </Button>
            </div>
        </div>

        <div style="margin-bottom: 36px;">
            <Button
                @click="ButtonClickModalClick"
                size="default"
                type="error">打开确认对话框
            </Button>
        </div>

        <div style="margin-bottom: 36px;">
            <Button
                @click="ButtonClickTitle"
                size="default"
                type="primary">自定义标题
            </Button>
            <Modal
                :title="'自定义标题'"
                v-model="show_custom_title">
            </Modal>
        </div>

        <div style="margin-bottom: 36px;">
            <Button
                @click="ButtonClickTitleStyle"
                size="default"
                type="primary">自定义标题样式
            </Button>
            <Modal
                v-model="show_custom_title_style">
                <div
                    style="color: red;"
                    slot="title">
                    自定义
                    <i>标题</i>
                    <span style="text-decoration-line: underline; text-decoration-style: double;">样式</span>
                    <img style="display: inline-block; height: 14px; width: 14px;"
                         src="https://www.baidu.com/favicon.ico">
                </div>
            </Modal>
        </div>

        <div style="margin-bottom: 36px;">
            <Button
                @click="ButtonClickContent"
                size="default"
                type="primary">自定义内容
            </Button>
            <Modal
                type="info"
                :content="'自定义内容'"
                v-model="show_custom_content">
            </Modal>
        </div>

        <div style="margin-bottom: 36px;">
            <Button
                @click="ButtonClickContentStyle"
                size="default"
                type="primary">自定义内容样式
            </Button>
            <Modal
                type="info"
                v-model="show_custom_content_style">
                <div
                    style="color: red;"
                    slot="content">
                    自定义
                    <i>标题</i>
                    <span style="text-decoration-line: underline; text-decoration-style: double;">样式</span>
                    <img style="display: inline-block; height: 14px; width: 14px;"
                         src="https://www.baidu.com/favicon.ico">
                </div>
            </Modal>
        </div>

        <div style="margin-bottom: 36px;">
            <Button
                @click="ButtonClickEventService"
                size="default"
                type="warning">事件（JS）
            </Button>
            <Modal
                v-model="show_event_service">
            </Modal>
        </div>

        <div style="margin-bottom: 36px;">
            <Button
                @click="ButtonClickEventElement"
                size="default"
                type="error">事件（标签）
            </Button>
            <Modal
                @ok="ok"
                @cancel="cancel"
                type="error"
                v-model="show_event_element">
            </Modal>
        </div>

        <div style="margin-bottom: 36px;">
            <Button
                @click="ButtonClickHideCancel"
                size="default"
                type="error">隐藏取消按钮
            </Button>
            <Modal
                type="error"
                v-model="show_hide_cancel">
                <div slot="cancel"></div>
            </Modal>
        </div>

        <div style="margin-bottom: 36px;">
            <Button
                @click="ButtonClickCustomOk"
                size="default"
                type="error">自定义确定按钮
            </Button>
            <Modal
                @ok="okCustom"
                type="error"
                v-model="show_custom_ok">
                <div slot="ok">
                    <Button
                        type="info">我知道了</Button>
                </div>
            </Modal>
        </div>

    </div>
</template>

<script>

export default {
    name: "TestModal",
    data() {
        return {
            show: true,
            show_custom_title: false,
            show_custom_title_style: false,
            show_custom_content: false,
            show_custom_content_style: false,
            show_event_service: false,
            show_event_element: false,
            show_hide_cancel: false,
            show_custom_ok: false,
        };
    },
    methods: {
        ButtonClickInfo() {
            this.$Modal.info();
        },
        ButtonClickSuccess() {
            this.$Modal.success();
        },
        ButtonClickWarning() {
            this.$Modal.warning();
        },
        ButtonClickError() {
            this.$Modal.error();
        },
        ButtonClickModalClick() {
            this.$Modal.confirm();
        },
        ButtonClickTitle() {
            this.show_custom_title = true;
        },
        ButtonClickTitleStyle() {
            this.show_custom_title_style = true;
        },
        ButtonClickContent() {
            this.show_custom_content = true;
        },
        ButtonClickContentStyle() {
            this.show_custom_content_style = true;
        },
        ButtonClickEventService() {
            this.$Modal.warning({
                ok: () => {
                    console.log("ok");
                },
                cancel: () => {
                    console.log("cancel");
                },
            });
        },
        ButtonClickEventElement() {
            this.show_event_element = true;
        },
        ok() {
            console.log("ok");
        },
        cancel() {
            console.log("cancel");
        },
        ButtonClickHideCancel() {
            this.show_hide_cancel = true;
        },
        ButtonClickCustomOk(){
            this.show_custom_ok = true;
        },
        okCustom(){
            console.log("okCustom")
        },
    },
}
</script>

<style scoped>

</style>
