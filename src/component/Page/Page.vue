<template>
    <div class="page">
        <!--首页-->
        <div
            @click="click(s)"
            class="button icon"
            v-if="curr > 1">
            <i class="ri-skip-left-line"></i>
        </div>

        <!--左-->
        <div
            @click="click(prev1)"
            class="button icon"
            v-if="curr > 1">
            <i class="ri-arrow-left-s-line"></i>
        </div>

        <!--当前-2-->
        <div
            @click="click(prev2)"
            class="button"
            v-if="prev2 > 0">{{ prev2 }}
        </div>

        <!--当前-1-->
        <div
            @click="click(prev1)"
            class="button"
            v-if="prev1 > 0">{{ prev1 }}
        </div>

        <!--当前-->
        <div
            class="button curr">{{ curr }}
        </div>

        <!--当前+1-->
        <div
            @click="click(next1)"
            class="button"
            v-if="next1 < e">{{ next1 }}
        </div>

        <!--当前+2-->
        <div
            @click="click(next2)"
            class="button"
            v-if="next2 < e">{{ next2 }}
        </div>

        <!--右-->
        <div
            @click="click(next1)"
            class="button icon"
            v-if="curr < e">
            <i class="ri-arrow-right-s-line"></i>
        </div>

        <!--尾页-->
        <div
            @click="click(e)"
            class="button icon"
            v-if="curr < e">
            <i class="ri-skip-right-line"></i>
        </div>

    </div>
</template>

<script>
export default {
    name: "Page",
    props: {
        page: {
            type: [Number,],
            default: 1,
        },
        size: {
            type: [Number,],
            default: 20,
        },
        total: {
            type: [Number,],
            default: 0,
        },
    },
    computed: {
        s: {
            get() {
                return 1;
            },
        },
        prev2: {
            get() {
                return this.page - 2;
            },
        },
        prev1: {
            get() {
                return this.page - 1;
            },
        },
        curr: {
            get() {
                return this.page;
            },
        },
        next1: {
            get() {
                return this.page + 1;
            },
        },
        next2: {
            get() {
                return this.page + 2;
            },
        },
        e: {
            get() {
                return Math.ceil(this.total / this.size);
            },
        },
    },
    methods: {
        click(page) {
            this.$emit("click", page);
        },
    },
}
</script>

<style scoped>
.page {
    display: flex;
    column-gap: 9px;
    width: 100%;
}

.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    box-sizing: border-box;
    padding: 0 14px;
    border-radius: 2px;
    color: #515a6e;
    border: 1px solid #dcdee2;
    font-size: 14px;
    cursor: pointer;
    user-select: none;
    font-family: "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", monospace;
}

.button:not(.curr):hover {
    background-color: rgba(255, 255, 0, 0.2);
}

.icon {
    font-size: 18px;
    width: 36px;
}

.curr {
    background-color: rgba(45, 140, 240, 0.9);
    border: 1px solid rgba(45, 140, 240, 1);
    color: #ffffff;
}
</style>
