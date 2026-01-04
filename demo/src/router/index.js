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
            {path: "/avatar", component: () => import("@/page/TestAvatar"),},
            {path: "/button", component: () => import("@/page/TestButton"),},
            {path: "/checkbox", component: () => import("@/page/TestCheckbox"),},
            {path: "/Input", component: () => import("@/page/TestInput"),},
            {path: "/loading", component: () => import("@/page/TestLoading"),},
            {path: "/message", component: () => import("@/page/TestMessage"),},
            {path: "/modal", component: () => import("@/page/TestModal"),},
            {path: "/radio", component: () => import("@/page/TestRadio"),},
            {path: "/Select", component: () => import("@/page/TestSelect"),},
            {path: "/tag", component: () => import("@/page/TestTag"),},
        ],
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
