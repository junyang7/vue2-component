import c from './Modal.vue';
import s from './service';

c.install = function (v) {
    v.component(c.name, c);
    if (!v.prototype.$Modal) {
        v.prototype.$Modal = s;
    }
};

export default c;
