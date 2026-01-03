<template>
    <div>

        <div style="margin-bottom: 36px;">
            <div>size</div>
            <div style="display: flex; align-items: center; justify-content: flex-start; column-gap: 9px;">
                <Tag size="small">small</Tag>
                <Tag size="default">default</Tag>
                <Tag size="large">large</Tag>
            </div>
        </div>

        <div style="margin-bottom: 36px;">
            <div>type</div>
            <div style="display: flex; align-items: center; justify-content: flex-start; column-gap: 9px;">
                <Tag type="default">default</Tag>
                <Tag type="text">text</Tag>
                <Tag type="info">info</Tag>
                <Tag type="primary">primary</Tag>
                <Tag type="success">success</Tag>
                <Tag type="warning">warning</Tag>
                <Tag type="error">error</Tag>
                <Tag type="editor">editor</Tag>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "TestTag",
    data() {
        return {
            show: true,
        };
    },
}
</script>

<style scoped>

</style>
