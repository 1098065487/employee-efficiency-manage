import Layout from '../components/Layout';

export default {
    path: "/employee",
    name: "employee",
    component: Layout,
    meta: {},
    children: [
        {
            path: "/employee/personInfo",
            name: "personInfo",
            component: () => import('../pages/employee/personInfo.vue'),
            meta: {},
        },
        {
            path: "/employee/postChange",
            name: "postChange",
            component: () => import('../pages/employee/postChange.vue'),
            meta: {},
        },
    ]
}