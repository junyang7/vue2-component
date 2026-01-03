import "remixicon/fonts/remixicon.css";
import Component from './component';
import Service from './service';
import Tool from './tool';

const install = function (Vue) {
    if (install.installed) return;
    install.installed = true;

    Vue.use(Component);
    Vue.use(Service);
    Vue.use(Tool);
};

export default { install };
