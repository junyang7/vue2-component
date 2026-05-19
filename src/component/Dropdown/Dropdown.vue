<template>
    <div style="position: relative;">

        <slot name="trigger">
            <div>
                <Button
                    @click="show($event)">
                    <div style="display: flex; align-items: center;">
                        <div>更多</div>
                        <div>
                            <i class="ri-arrow-down-s-line"></i>
                        </div>
                    </div>
                </Button>
            </div>
        </slot>

        <slot name="menu">
            <div
                class="dropdown"
                v-if="v && setting.menu_list.length > 0">
                <template
                    v-for="(a,b,c) in setting?.menu_list || []">

                    <!--分割线-->
                    <div
                        v-if="a?.divider || a.divider"
                        class="divider-y"></div>

                    <!--选项卡-->
                    <div
                        @click="click(a)"
                        v-else
                        class="menu">
                        <div
                            :style="{color:a.icon_color}"
                            class="icon">
                            <img
                                v-if="a.icon_img_src"
                                :src="a.icon_img_src">
                            <i
                                v-else-if="a.icon_class"
                                :class="a.icon_class"></i>
                        </div>
                        <div class="divider-x"></div>
                        <div class="name">{{ a.name }}</div>
                    </div>

                </template>
            </div>
        </slot>

    </div>
</template>

<script>

export default {
    name: "Dropdown",
    props: {
        setting: {
            type: Object,
            default() {
                return {
                    x: 0,
                    y: 0,
                    menu_list: [],
                };
            },
        },
    },
    data() {
        return {
            v: false,
        };
    },
    methods: {
        click(menu) {
            this.hide();
            this.$emit("click", menu);
        },
        show(e){
            console.log(e)
            e.preventDefault();
            e.stopPropagation();
            this.v = true;
        },
        hide() {
            this.v = false;
        }
    },
    mounted() {
        document.addEventListener("click", this.hide);
        document.addEventListener("dropdown", this.hide);
    },
    beforeDestroy() {
        document.removeEventListener("click", this.hide);
        document.removeEventListener("dropdown", this.hide);
    },
}
</script>

<style scoped>
.dropdown {
    z-index: 999999;
    position: fixed;
    background-color: #f8f8f9;
    border: 1px solid #dcdee2;
    padding: 10px;
    box-shadow: 0 0 10px 4px #dcdee2;
    /*left: 0;*/
    /*top: 0;*/
    font-size: 14px;
    white-space: nowrap;
    word-break: keep-all;
    overflow: visible;
}

.dropdown .menu {
    cursor: pointer;
    height: 26px;
    display: flex;
}

.dropdown .menu:hover {
    background-color: rgb(0, 0, 255, 0.1);
    color: #2b85e4;
}

.dropdown .menu .icon img {
    width: 12px;
    height: 12px;
}

.dropdown .divider-y {
    height: 1px;
    width: 100%;
    background-color: #e8eaec;
    margin: 8px 0;
}

.dropdown .menu .divider-x {
    height: 100%;
    width: 1px;
    background-color: #e8eaec;
    margin: 0 8px;
}

.dropdown .menu .icon {
    width: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ed4014;
    font-size: 16px;
}

.dropdown .menu .name {
    height: 100%;
    width: auto;
    display: flex;
    align-items: center;
    padding-right: 6px;
}
</style>
