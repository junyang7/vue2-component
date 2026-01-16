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
            {path: "/copy", component: () => import("@/page/TestCopy"),},
            {path: "/datetime", component: () => import("@/page/TestDatetime.vue"),},
            {path: "/form", component: () => import("@/page/TestForm.vue"),},
            {path: "/input", component: () => import("@/page/TestInput"),},
            {path: "/loading", component: () => import("@/page/TestLoading"),},
            {path: "/menu", component: () => import("@/page/TestMenu.vue"),},
            {path: "/message", component: () => import("@/page/TestMessage"),},
            {path: "/modal", component: () => import("@/page/TestModal"),},
            {path: "/radio", component: () => import("@/page/TestRadio"),},
            {path: "/select", component: () => import("@/page/TestSelect"),},
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
