<template>
    <div class="breadcrumb">
        <template v-for="(a,b,c) in list">
            <template v-if="b > 0">
                <div class="icon">
                    <i class="ri-arrow-right-s-line"></i>
                </div>
            </template>
            <div class="label">
                <router-link :to="a.to">{{ a.label }}</router-link>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: "Breadcrumb",
    props: {
        list: {
            type: Array,
            default() {
                return [];
            },
        },
    },
}
</script>

<style scoped>
.breadcrumb {
    height: 36px;
    line-height: 36px;
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
}

.breadcrumb .icon {
    width: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #c5c8ce;
    font-size: 16px;
}

.breadcrumb .label {
    color: #515a6e;
}

</style>
