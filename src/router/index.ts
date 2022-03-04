import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/",
        name: "Index",
        meta: {
            showNav: true,
            showFooter: true
        },
        component: () => import("../views/admin/indexPages/Index.vue"),
    },
    {
        path: "/admin",
        name: "Admin",
        component: () => import("../views/admin/indexPages/Admin.vue"),
        meta: {
            showNav: false
        },
        children: [
            {path: '', component: () => import ("../views/admin/indexPages/DashBoard.vue")},
            {path: 'system', component: () => import ("../views/admin/system/SystemSetting.vue")},
            {path: 'system/status', component: () => import ("../views/admin/system/SystemStatus.vue")},
            {path: 'crontab', component: () => import ("../views/admin/indexPages/CrontabManager.vue")},
            {path: 'vul', component: () => import ("../views/admin/indexPages/VulManager.vue")},
            {
                path: 'user', component: () => import ("../views/admin/indexPages/UserManager.vue"),
                children: [
                    {path: '', component: () => import ('../components/admin/usermanager/UserList.vue')}
                ]
            },
            {
                path: 'log', component: () => import ("../views/admin/indexPages/LogManager.vue"),
                children: [
                    {path: '', component: () => import ("../components/admin/logmanger/LogList.vue")}
                ]
            },
        ]
    },
    {
        path: "/login",
        name: "Login",
        meta: {
            showFooter: false
        },
        component: () => import("../views/admin/indexPages/Login.vue"),
    },
    // 该路由需放置在最后，兜底路由。
    {path: '/:pathMatch(.*)', redirect: {name: 'Index'}}
];

// @ts-ignore
export default createRouter({
    history: createWebHistory(),
    // @ts-ignore
    routes,
});