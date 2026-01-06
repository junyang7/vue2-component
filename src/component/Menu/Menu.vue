<template>
    <div class="component-menu">
        <div v-for="(a,b,c) in option_list" :key="a[default_setting.value]">

            <!--节点区域-->
            <div
                @click="MenuClick(a)"
                :class="{
                    one: true,
                    activated: a[default_setting.value] === inner_value,
                }">

                <div class="l">
                    <div class="indent" :style="{width:`${deep*computed_setting.node_indent+9}px`}"></div>
                    <div>
                        <i :class="a.prefix"></i>
                    </div>
                    <div style="margin-left: 4px;">{{ a[default_setting.label] }}</div>
                </div>

                <div class="r">
                    <div style="margin: 0 9px;">
                        <i
                            v-show="Array.isArray(a.children) && a.children.length > 0"
                            :class="`${show[a[default_setting.value]] ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'}`"></i>
                    </div>
                </div>

            </div>

            <!--子级区域-->
            <Menu
                @click="NodeMenuClick"
                v-show="show[a[default_setting.value]]"
                v-if="Array.isArray(a.children)"
                :setting="default_setting"
                :option_list="a.children"
                :deep="deep+1"
                v-model="inner_value"></Menu>

        </div>
    </div>
</template>

<script>
export default {
    name: "Menu",
    props: {
        value: {
            type: null,
            default: null,
        },
        option_list: {
            type: Array,
            default() {
                return [
                    // {
                    //     id: 22,
                    //     label: "菜单2-2",
                    //     to: "",
                    //     children: [
                    //         {
                    //             id: 221,
                    //             label: "菜单2-2-1",
                    //             to: "",
                    //         },
                    //     ],
                    // },
                ];
            },
        },
        setting: {
            type: Object,
            default() {
                return {};
            },
        },
        deep: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            show: {},
            default_setting: {
                label: "label",
                value: "id",
                node_height: 36,
                node_indent: 18,
            },
        };
    },
    methods: {
        init() {
            this.option_list.forEach((menu) => {
                const value = menu[this.computed_setting.value];
                if (!(value in this.show)) {
                    this.$set(this.show, value, false);
                }
            });
        },
        MenuClick(menu) {
            this.$emit("input", menu[this.computed_setting.value]);
            if (Array.isArray(menu.children) && menu.children.length > 0) {
                this.$set(this.show, menu[this.computed_setting.value], !this.show[menu[this.computed_setting.value]]);
            }
            this.NodeMenuClick(menu);
        },
        NodeMenuClick(menu){
            this.$emit("click", menu);
        },
    },
    computed: {
        inner_value: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            },
        },
        computed_setting() {
            return {
                ...this.default_setting,
                ...this.setting,
            };
        },
    },
    watch: {
        option_list: {
            handler() {
                this.init();
            },
            immediate: true,
        },
    },
}
</script>

<style scoped>
.component-menu .one {
    display: flex;
    align-items: center;
    height: 36px;
    justify-content: space-between;
}

.component-menu .one:hover {
    background-color: #f8f8f9;
}

.component-menu .one .l, .component-menu .one .r {
    display: flex;
    align-items: center;
    height: 100%;
}

.component-menu .one .l .indent {
    height: 100%;
}

.component-menu .one .r > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.activated {
    color: #2d8cf0;
    background-color: #f0faff;
}
</style>
