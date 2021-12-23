import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: "/",
        name: "Index",
        component: () => import("../views/Index.vue"),
    },
    {
        path: "/admin",
        name: "Admin",
        component: () => import("../views/Admin.vue"),
    },
];
export default createRouter({
    history: createWebHistory(),
    routes,
});
//# sourceMappingURL=index.js.map