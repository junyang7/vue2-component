import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: () => import("@/page/Index.vue"),
        children: [
            {path: "/Avatar", component: () => import("@/page/TestAvatar"),},
            {path: "/Button", component: () => import("@/page/TestButton"),},
            {path: "/checkbox", component: () => import("@/page/TestCheckbox"),},
            {path: "/Input", component: () => import("@/page/TestInput"),},
            {path: "/Loading", component: () => import("@/page/TestLoading"),},
            {path: "/Message", component: () => import("@/page/TestMessage"),},
            {path: "/Modal", component: () => import("@/page/TestModal"),},
            {path: "/radio", component: () => import("@/page/TestRadio"),},
            {path: "/Select", component: () => import("@/page/TestSelect"),},
            {path: "/Tag", component: () => import("@/page/TestTag"),},
        ],
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
