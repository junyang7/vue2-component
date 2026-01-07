<template>
    <div>

        <div style="margin-bottom: 36px;">
            <div>没有传data，Copy内也没有东西，不展示复制图标</div>
            <Copy></Copy>
        </div>

        <div style="margin-bottom: 36px;">
            <div>Copy组件内部有内容，不传data，有复制图标，复制内容是组件内部text</div>
            <Copy>
                <span>hello </span>
                <span>world </span>
                <span> !</span>
            </Copy>
        </div>

        <div style="margin-bottom: 36px;">
            <div>Copy组件内部有内容，传data，有复制图标，复制内容是data</div>
            <Copy data="Hello World!">
                <span>hello </span>
                <span>world </span>
                <span> !</span>
            </Copy>
        </div>

        <div style="margin-bottom: 36px;">
            <div>Copy组件内部无内容，传data，有复制图标，复制内容是data</div>
            <Copy data="Hello World!"></Copy>
        </div>

    </div>
</template>

<script>
export default {
    name: "TestCopy",
}
</script>

<style scoped>

</style>
