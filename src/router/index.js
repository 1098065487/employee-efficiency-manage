import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/login';
import Layout from "../components/Layout";
import Home from '../pages/home.vue'
import employee from './employee';

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/home',
        component: Layout,
        children: [
            {
                path: '/home',
                name: 'home',
                component: Home
            }
        ]
    },
    employee,
]

const router = new VueRouter({
    routes
})

export default router
