import Modal from './Modal.vue';
import ModalService from './modal';

// 1️⃣ 注册组件
Modal.install = function (Vue) {
    Vue.component(Modal.name, Modal);

    // 2️⃣ 注入 service（与组件强绑定）
    if (!Vue.prototype.$Modal) {
        Vue.prototype.$Modal = ModalService;
    }
};

export default Modal;
