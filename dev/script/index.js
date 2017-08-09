import 'babel-polyfill';

import Vue from 'vue';

import router from '../router';
import store from '../store';
import App from '../ui/page/App.vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import Platform from 'joshua-platform';
// import Sensitive from './plugin/Sensitive';

window.Platform = Platform;


const app = new Vue({
    router,
    store,
    components: {
        App,
    },
}).$mount('#app');
