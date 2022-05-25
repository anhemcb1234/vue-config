import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
export const router = new VueRouter({
    routes:[
        {
            path:'/',
            name:'login',
            component:()=>import('@/page/Login.vue')
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
        }, 

        {
            path:'/checkout',
            name:'checkout',
            component:()=>import('@/page/Checkout.vue')
        },

        {
            path:'/overtime',
            name:'overtime',
            component:()=>import('@/page/Overtime.vue')
        },
        {
            path:'/test',
            name:'test',
            component:()=>import('@/page/Test.vue')
        },
        {
            path:'/payroll',
            name:'payroll',
            component:()=>import('@/page/Payroll.vue')
        }
    ],
    mode: "history"
})