import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = resolve => require(['./ui/page/Home.vue'], resolve);
const Login = resolve => require(['./ui/page/Login.vue'], resolve);

const Controller = resolve => require(['./ui/page/Controller.vue'], resolve);
const Message = resolve => require(['./ui/page/Message.vue'], resolve);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/Controller',
        name: 'Controller',
        component: Controller,
    },
    {
        path: '/Message',
        name: 'Message',
        component: Message,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
