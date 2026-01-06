<template>
    <div class="component-tree">
        <div v-for="(a,b,c) in option_list" :key="a[option_value_name]">

            <!--节点区域-->
            <div
                @click="a.show = !a.show"
                class="one">

                <div class="l">
                    <div class="indent" :style="{width:`${deep*36+9}px`}"></div>
                    <div>
                        <i class="ri-add-box-line"></i>
                    </div>
                    <div style="margin-left: 4px;">{{ a[option_label_name] }}</div>
                </div>

                <div class="r">
                    <div style="margin: 0 9px;">
                        <i class="ri-arrow-down-s-line"></i>
                    </div>
                </div>

            </div>

            <!--子级区域-->
            <Tree
                v-show="a.show"
                v-if="Array.isArray(a.children)"
                :option_value_name="option_value_name"
                :option_label_name="option_label_name"
                :option_list="a.children"
                :deep="deep+1"></Tree>

        </div>
    </div>
</template>

<script>
export default {
    name: "Tree",
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
                    //     show: false,
                    //     children: [
                    //         {
                    //             id: 221,
                    //             label: "菜单2-2-1",
                    //             to: "",
                    //             show: false,
                    //         },
                    //     ],
                    // },
                ];
            },
        },
        option_label_name: {
            type: String,
            default: "label",
        },
        option_value_name: {
            type: String,
            default: "id",
        },
        deep: {
            type: Number,
            default: 0,
        },
    }
}
</script>

<style scoped>
.component-tree .one {
    display: flex;
    align-items: center;
    height: 36px;
    justify-content: space-between;
}

.component-tree .one:hover {
    background-color: rgba(255, 255, 0, 0.2);
}

.component-tree .one .l, .component-tree .one .r {
    display: flex;
    align-items: center;
    height: 100%;
}

.component-tree .one .l .indent {
    background-color: rgba(255, 0, 0, 0.1);
    height: 100%;
}

.component-tree .one .r > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
</style>
