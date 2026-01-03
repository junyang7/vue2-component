<template>
    <div class="component">
        <transition-group name="message-fade" tag="div">
            <div
                v-for="(a,b,c) in message_list"
                :key="a.id"
                class="message-box">
                <div class="message">
                    <div :style="{color: a.icon_color}" class="prefix">
                        <i :class="a.icon_class"></i>
                    </div>
                    <div class="space"></div>
                    <div>{{ a.content }}</div>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: "Message",
    data() {
        return {
            duration: 3000,
            message_list: [],
        };
    },
    methods: {
        push(message) {
            if (!message.id) {
                message.id = crypto?.randomUUID?.() || Date.now() + Math.random();
            }
            if (!message.hasOwnProperty("duration") || message.duration < 1) {
                message.duration = this.duration;
            }
            message.icon_class = this.getIconClass(message);
            message.icon_color = this.getIconColor(message);
            this.message_list.push(message);
            setTimeout(() => {
                this.remove(message.id);
            }, message.duration)
        },
        remove(message_id) {
            this.message_list = this.message_list.filter(message => message.id !== message_id);
            if (this.message_list.length === 0) {
                this.$emit("close");
            }
        },
        getIconClass(message) {
            switch (message.type) {
                case "info":
                    return "ri-information-fill";
                case "success":
                    return "ri-checkbox-circle-fill";
                case "warning":
                    return "ri-error-warning-fill";
                case "error":
                    return "ri-close-circle-fill";
                default:
                    return "";
            }
        },
        getIconColor(message) {
            switch (message.type) {
                case "info":
                    return "#2db7f5";
                case "success":
                    return "#19be6b";
                case "warning":
                    return "#ff9900";
                case "error":
                    return "#ed4014";
                default:
                    return "";
            }
        },
    },
}
</script>

<style scoped>
.component {
    position: fixed;
    top: 36px;
    left: 50%;
    transform: translateX(-50%);
}

.message-box {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin-bottom: 18px;
}

.message {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border-radius: 2px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    font-size: 14px;
    color: #515a6e;
    word-break: break-all;
    height: 36px;
    padding: 0 9px;
}

.prefix {
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
}

.space {
    width: 4px;
}

.message-fade-enter {
    opacity: 0;
    transform: translateY(-36px) scale(0.95);
}

.message-fade-enter-active {
    transition: opacity 0.3s cubic-bezier(.23, 1, .32, 1),
    transform 0.3s cubic-bezier(.23, 1, .32, 1);
}

.message-fade-leave-active {
    position: absolute;
    width: 100%;
    transition: opacity 0.25s ease-in,
    transform 0.25s ease-in;
}

.message-fade-leave-to {
    opacity: 0;
    transform: translateY(-36px);
}

.message-fade-move {
    transition: transform 0.3s cubic-bezier(.23, 1, .32, 1);
}

</style>
