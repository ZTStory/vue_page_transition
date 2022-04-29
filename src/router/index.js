import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("../components/home.vue"),
        name: "Home",
        meta: {
            depth: 0,
        },
    },
    {
        path: "/mine",
        component: () => import("../components/mine.vue"),
        name: "Mine",
        meta: {
            depth: 0,
        },
    },
    {
        path: "/next",
        component: () => import("../components/next.vue"),
        name: "Next",
        meta: {
            depth: 1,
        },
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
