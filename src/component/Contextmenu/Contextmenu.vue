<template>
    <div :style="{left: `${setting.x}px`, top: `${setting.y}px`,}" v-if="computed_value" class="contextmenu">
        <template v-for="(a,b,c) in setting?.menu_list || []">

            <!--分割线-->
            <div v-if="a?.divider || a.divider" class="divider-y"></div>

            <!--选项卡-->
            <div @click="click(a)" v-else class="menu">
                <div :style="{color:a.color}" class="icon">
                    <img v-if="a.icon_img_src" :src="a.icon_img_src">
                    <i v-else-if="a.icon_class" :class="a.icon_class"></i>
                </div>
                <div class="divider-x"></div>
                <div class="name">{{ a.name }}</div>
            </div>

        </template>
    </div>
</template>

<script>
export default {
    name: "Contextmenu",
    props: {
        value: {
            type: Boolean,
            default: false,
        },
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
    methods: {
        click(menu) {
            this.hide();
            this.$emit("click", menu);
        },
        hide() {
            this.computed_value = false;
        }
    },
    computed: {
        computed_value: {
            get() {
                return this.value;
            }
            ,
            set(v) {
                this.$emit("input", v);
            },
        }
    },
    mounted() {
        document.addEventListener("click", this.hide);
    },
    beforeDestroy() {
        document.removeEventListener("click", this.hide);
    },
}
</script>

<style scoped>
.contextmenu {
    z-index: 999999;
    position: fixed;
    background-color: #f8f8f9;
    border: 1px solid #dcdee2;
    padding: 10px;
    box-shadow: 0 0 10px 4px #dcdee2;
    left: 0;
    top: 0;
    font-size: 14px;
    white-space: nowrap;
    word-break: keep-all;
    overflow: visible;
}

.contextmenu .menu {
    cursor: pointer;
    height: 26px;
    display: flex;
}

.contextmenu .menu:hover {
    background-color: rgb(0, 0, 255, 0.1);
    color: #2b85e4;
}

.contextmenu .menu .icon img {
    width: 12px;
    height: 12px;
}

.contextmenu .divider-y {
    height: 1px;
    width: 100%;
    background-color: #e8eaec;
    margin: 8px 0;
}

.contextmenu .menu .divider-x {
    height: 100%;
    width: 1px;
    background-color: #e8eaec;
    margin: 0 8px;
}

.contextmenu .menu .icon {
    width: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ed4014;
    font-size: 16px;
}

.contextmenu .menu .name {
    height: 100%;
    width: auto;
    display: flex;
    align-items: center;
}
</style>
