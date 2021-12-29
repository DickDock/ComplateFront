import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/",
        name: "Index",
        meta:{
            showNav:true
        },
        component: () => import("../views/Index.vue"),
    },
    {
        path: "/admin",
        name: "Admin",
        component: () => import("../views/Admin.vue"),
        meta:{
            showNav:false
        },
        children: [
            {path: '', component: () => import ("../views/admin/DashBoard.vue")},
            {path: 'system', component: () => import ("../views/admin/SystemSetting.vue")},
            {path: 'system/status', component: () => import ("../views/admin/SystemStatus.vue")},
            {
                path: 'user', component: () => import ("../views/admin/UserManager.vue"),
                children: [
                    {path: '',component: () => import ('../components/admin/usermanager/UserList.vue')}
                ]
            },
            {path: 'log', component: () => import ("../views/admin/LogManager.vue")},
        ]
    },
];

// @ts-ignore
export default createRouter({
    history: createWebHistory(),
    // @ts-ignore
    routes,
});