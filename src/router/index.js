import Vue from "vue"
import VueRouter from "vue-router"

//1.引入 views 的三个视图
import HotView from "@/views/HotView.vue"
import WaitView from "@/views/WaitView.vue"
import TopView from "@/views/TopView.vue"

//2.安装路由插件
Vue.use(VueRouter)

//3.配置路由
const routes = [
    //默认打开首页时定向为hot
    {
        path: "/",
        redirect: "/hot"
    },
    {
        path: "/hot",
        component: HotView
    },{
        path: "/wait",
        component: WaitView
    },{
        path: "/top",
        component: TopView
    }
]

//4.创建&暴露
const router = new VueRouter({
    routes
})

export default router
