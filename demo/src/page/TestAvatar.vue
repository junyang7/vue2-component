<template>
    <div>

        <div style="margin-bottom: 36px;">
            <div>size</div>
            <div style="display: flex; align-items: center; justify-content: flex-start; column-gap: 9px;">
                <Avatar
                    label="微博"
                    size="small"></Avatar>
                <Avatar
                    label="微博"
                    type="primary"
                    size="default"></Avatar>
                <Avatar
                    label="微博"
                    type="error"
                    size="large"></Avatar>
            </div>
        </div>

        <div style="margin-bottom: 36px;">
            <div>url</div>
            <div style="display: flex; align-items: center; justify-content: flex-start; column-gap: 9px;">
                <Avatar
                    size="small"
                    url="https://i.loli.net/2017/08/21/599a521472424.jpg"></Avatar>
                <Avatar
                    size="default"
                    url="https://i.loli.net/2017/08/21/599a521472424.jpg"></Avatar>
                <Avatar
                    size="large"
                    url="https://i.loli.net/2017/08/21/599a521472424.jpg"></Avatar>
            </div>
        </div>

        <div style="margin-bottom: 36px;">
            <div>icon</div>
            <div style="display: flex; align-items: center; justify-content: flex-start; column-gap: 9px;">
                <Avatar
                    size="small"
                    icon="ri-user-line"></Avatar>
                <Avatar
                    type="warning"
                    size="default"
                    icon="ri-user-line"></Avatar>
                <Avatar
                    type="success"
                    size="large"
                    icon="ri-user-line"></Avatar>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "TestAvatar"
}
</script>

<style scoped>

</style>
