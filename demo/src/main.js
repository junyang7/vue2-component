import Vue from 'vue';
import App from './App.vue';
import router from './router'
import v2c from '../../src';
Vue.use(v2c);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
