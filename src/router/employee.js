import Layout from '../components/Layout';

export default {
    path: "/employee",
    name: "employee",
    component: Layout,
    meta: {},
    // redirect: '/employee/personInfo',
    children: [
        {
            path: "personInfo",
            name: "personInfo",
            component: () => import('../pages/employee/personInfo.vue'),
            meta: {},
        },
        {
            path: "postChange",
            name: "postChange",
            component: () => import('../pages/employee/postChange.vue'),
            meta: {},
        },
    ]
}