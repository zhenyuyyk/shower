import {RouteConfig} from 'vue-router'

const routes: Array<RouteConfig> = [
    {
        path: '/home',
        name: 'Home',
        meta:{
            crumbs:["首页"]
        },
        component: () => import('@/views/other/home.vue') //首页
    },
    {
        path: '/user/userList',
        name: 'UserList',
        meta:{
            crumbs:["用户中心","用户列表"]
        },
        component: () => import('@/views/user/userList.vue') //用户中心-用户列表
    },
    {
        path: '/order/orderList',
        name: 'OrderList',
        meta:{
            crumbs:["订单中心","订单列表"]
        },
        component: () => import('@/views/order/orderList.vue') //订单中心-订单列表
    },
]
export default routes