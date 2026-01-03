import Vue from 'vue';
import Loading from './Loading.vue';

const construct = Vue.extend(Loading);
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

function show( ) {
    let vm = getInstance();
    vm.show();
    return vm;
}

export default {
    show() {
        return show();
    },
    hide() {
        if (!instance) {
            return;
        }
        let vm = getInstance();
        vm.hide();
    },
}
