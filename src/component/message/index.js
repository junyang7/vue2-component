import c from './Message.vue';
import s from './service';

c.install = function (v) {
    v.component(c.name, c);
    if (!v.prototype.$Message) {
        v.prototype.$Message = s;
    }
};

export default c;
