import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
export const router = new VueRouter({
    routes:[
        {
            path:'/',
            name:'home',
            component:()=>import('../page/HomePage')
        },
        {
            path:'/testpase',
            name:'testpase',
            component:()=>import('../page/TestPage')
        },

    ],
    mode: "history"
})