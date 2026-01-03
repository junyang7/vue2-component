import Vue from 'vue';
import Modal from './Modal.vue';

const construct = Vue.extend(Modal);

function getInstance(option = {}) {
    const instance = new construct();
    instance.$once("close", () => {
        destroyInstance();
    });
    instance.$mount();
    document.body.appendChild(instance.$el);
    return instance;
}

function destroyInstance(instance) {
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

function open(option = {}) {
    let vm = getInstance(option);
    vm.open(option);
    return vm;
}

export default {
    info(option = {}) {
        return open({
            title: "信息",
            ...option,
            type: "info",
            show: true,
        });
    },
    success(option = {}) {
        return open({
            title: "成功",
            ...option,
            type: "success",
            show: true,
        });
    },
    warning(option = {}) {
        return open({
            title: "警告",
            ...option,
            type: "warning",
            show: true,
        });
    },
    error(option = {}) {
        return open({
            title: "错误",
            ...option,
            type: "error",
            show: true,
        });
    },
    confirm(option = {}) {
        return open({
            title: "确认",
            ...option,
            type: "confirm",
            show: true,
        });
    },
}
