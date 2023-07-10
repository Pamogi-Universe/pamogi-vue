import {createRouter, createWebHistory}  from "vue-router"
import {isAuthenticated} from "@/services/pocketbase/authentication";

const routes = [
    {
        path:'/login',
        name: "Login",
        component: () => import('@/views/Login.vue')
    },
    {
        path:'/',
        name:"Dashboard",
        component: () => import('@/views/Dashboard.vue')
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(async (to, from) => {
    console.log(isAuthenticated());
    if (!isAuthenticated() && to.name !== 'Login') return { name: 'Login' }
})