<template>
    <div>

        <div style="margin-bottom: 36px;">
            <div>size</div>
            <div style="display: flex; align-items: center; justify-content: flex-start; column-gap: 9px;">
                <Button size="small">small</Button>
                <Button size="default">default</Button>
                <Button size="large">large</Button>
            </div>
        </div>

        <div style="margin-bottom: 36px;">
            <div>type</div>
            <div style="display: flex; align-items: center; justify-content: flex-start; column-gap: 9px;">
                <Button type="default">default</Button>
                <Button type="text">text</Button>
                <Button type="info">info</Button>
                <Button type="primary">primary</Button>
                <Button type="success">success</Button>
                <Button type="warning">warning</Button>
                <Button type="error">error</Button>
                <Button type="editor">editor</Button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "TestButton",
    data() {
        return {
            show: true,
        };
    },
}
</script>

<style scoped>

</style>
