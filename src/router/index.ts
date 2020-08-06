import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import routersArr from './router'

Vue.use(VueRouter)

let routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/other/login.vue')
    },
    {
        path: '/',
        name: 'app',
        component: () => import('../components/layout/mainBody.vue'),
        children: []
    },
    {
        path: '*',
        redirect: '/404'
    }
]

routersArr.push({
    path: '/404',
    name: '404',
    meta: {
        crumbs: ["404"]
    },
    component: () => import('@/views/other/404.vue')
})
routes[2].children = routersArr

//解决跳转相同路径报错问题
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location: any) {
    // @ts-ignore
    return routerPush.call(this, location).catch((error: any) => error)
}

const router = new VueRouter({
    mode: 'hash',
    routes
})
router.beforeEach((to, from, next) => {
    //解决页面跳转之后回到顶部问题
    document.getElementsByClassName("content_main")[0] ? document.getElementsByClassName("content_main")[0].scrollTop = 0 : ""
    // let token = sessionStorage.getItem("token")
    // if (to.path == "/login") {
    //     next()
    // } else {
    //     if (token) {
    //         next()
    //     } else {
    //         next("/login")
    //     }
    // }
    next()
})
export default router
