import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'
import employee from './employee';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    employee,
]

const router = new VueRouter({
    routes
})

export default router
