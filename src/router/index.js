import {createRouter, createWebHistory} from "vue-router";

import Home from "../Home.vue"
import Login from "../Login.vue"
import Dashboard from "../Dashboard.vue"

const routes = [
    {path: "/", component: Home},
    {path: "/login", component: Login},
    {path: "/dashboard", component: Dashboard}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;