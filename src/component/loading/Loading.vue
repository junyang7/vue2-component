<template>
    <div
        v-if="visible"
        class="component">
        <div class="loader">
            <svg class="circular" viewBox="25 25 50 50">
                <circle
                    class="path"
                    cx="50"
                    cy="50"
                    r="20"
                    fill="none"
                    stroke-width="4"
                    stroke-miterlimit="10"
                />
            </svg>
        </div>
    </div>
</template>


<script>
export default {
    name: "Loading",
    data() {
        return {
            visible: false,
        };
    },
    methods: {
        show() {
            this.visible = true;
        },
        hide() {
            this.visible = false;
            this.$emit("input", false);
            this.$emit("close");
        },
    },
}
</script>

<style scoped>
.component {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 容器 */
.loader {
    width: 32px;
    height: 32px;
    position: relative;
}

/* 整体匀速旋转（一圈 = 一周期） */
.circular {
    animation: loading-rotate 2s linear infinite;
    height: 100%;
    width: 100%;
    transform-origin: center center;
}

.path {
    stroke: #4fc3f7; /* 起始色 */
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: loading-dash 1.5s ease-in-out infinite,
    loading-color 6s ease-in-out infinite;
}

/* 旋转 */
@keyframes loading-rotate {
    to {
        transform: rotate(1turn);
    }
}

/* 速度变化（在一圈内完成） */
@keyframes loading-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 90, 200;
        stroke-dashoffset: -35;
    }

    100% {
        stroke-dasharray: 90, 200;
        stroke-dashoffset: -124;
    }
}

/* 颜色沿轨迹变化（一圈闭合） */
@keyframes loading-color {
    0%, 100% {
        stroke: #4fc3f7; /* 浅蓝 */
    }

    25% {
        stroke: #81c784; /* 绿色柔和 */
    }

    50% {
        stroke: #ffb74d; /* 橙色柔和 */
    }

    75% {
        stroke: #f06292; /* 粉色柔和 */
    }
}

/* 无障碍 */
@media (prefers-reduced-motion: reduce) {
    .circular,
    .path {
        animation: none;
    }
}


</style>
