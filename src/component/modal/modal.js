import Vue from 'vue';
import Modal from './Modal.vue';

let instance;

function getInstance () {
    if (!instance) {
        const Ctor = Vue.extend(Modal);
        instance = new Ctor();
        instance.$mount(document.createElement('div'));
        document.body.appendChild(instance.$el);
    }
    return instance;
}

export default {
    confirm (options) {
        return getInstance().open(options);
    }
};
