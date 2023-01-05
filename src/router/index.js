import {createRouter, createWebHistory} from "vue-router";

import Home from "../Home.vue"
import Login from "../Login.vue"
import Dashboard from "../Dashboard.vue"
import ArticleMain from "../components/articleMain.vue"

const routes = [
    {path: "/", component: Home},
    {path: "/login", component: Login},
    {path: "/dashboard", component: Dashboard},
    {path: "/article/:id", component: ArticleMain}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;