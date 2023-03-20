import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from '@/views/layout.vue';

const routes:Array<RouteRecordRaw> =[
    // {
    //     path: '/',
    //     redirect: '/',
    // },
    {
        path:'/',
        name:'Layout',
        component:Layout
    }
]

const router =createRouter({
    history:createWebHistory(),
    routes
})
export default router