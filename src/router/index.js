import { createRouter, createWebHashHistory} from "vue-router";

const routes = [
    { path: "/", component: () => import("../components/HelloWorld.vue"), name: "HelloWorld" },
    { path: "/next", component: () => import("../components/NextPage.vue"), name: "NextPage" },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
