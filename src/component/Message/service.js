import Vue from 'vue';
import Message from './Message.vue';

const construct = Vue.extend(Message);
let instance;

function getInstance() {
    if (!instance) {
        instance = new construct();
        instance.$once("close", () => {
            destroyInstance();
        });
        instance.$mount();
        document.body.appendChild(instance.$el);
    }
    return instance;
}

function destroyInstance() {
    if (!instance) {
        return;
    }
    instance.$off()
    instance.$destroy()
    if (instance.$el && instance.$el.parentNode) {
        instance.$el.parentNode.removeChild(instance.$el);
    }
    instance = null;
}

function push(option = {}, type, content) {
    if (typeof option !== "object" || option === null) {
        option = {
            content: String(option),
        };
    }
    if (!option.hasOwnProperty("content") || option.content === null || option.content === undefined || option.content === "") {
        option.content = content;
    }
    option.type = type;
    let vm = getInstance();
    vm.push(option);
    return vm;
}

export default {
    info(option = {}) {
        return push(option, "info", "消息");
    },
    success(option = {}) {
        return push(option, "success", "成功");
    },
    warning(option = {}) {
        return push(option, "warning", "警告");
    },
    error(option = {}) {
        return push(option, "error", "错误");
    },
}
