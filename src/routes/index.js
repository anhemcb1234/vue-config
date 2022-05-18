import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
export const router = new VueRouter({
    routes:[
        {
            path:'/',
            name:'login',
            component:()=>import('../components/Login.vue')
        },
        {
            path:'/home',
            name:'home',
            component:()=>import('@/page/HomePage.vue')
        }, 
        {
            path:'/nav',
            name:'nav',
            component:()=>import('@/components/Nav.vue')
        }
    ],
    mode: "history"
})