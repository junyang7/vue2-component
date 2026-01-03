import c from './Loading.vue';
import s from './service';

c.install = function (v) {
    v.component(c.name, c);
    if (!v.prototype.$Loading) {
        v.prototype.$Loading = s;
    }
};

export default c;
