import Modal from './modal';

const components = [
    Modal
];

const install = function (Vue) {
    components.forEach(c => Vue.use(c));
};

export default { install };
export { Modal };
