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
            {path: "/TestAce", component: () => import("@/page/TestAce"),},
            {path: "/TestAvatar", component: () => import("@/page/TestAvatar"),},
            {path: "/TestBreadcrumb", component: () => import("@/page/TestBreadcrumb"),},
            {path: "/TestButton", component: () => import("@/page/TestButton"),},
            {path: "/TestCheckbox", component: () => import("@/page/TestCheckbox"),},
            {path: "/TestContextmenu", component: () => import("@/page/TestContextmenu"),},
            {path: "/TestCopy", component: () => import("@/page/TestCopy"),},
            {path: "/TestDatetime", component: () => import("@/page/TestDatetime.vue"),},
            {path: "/TestDropdown", component: () => import("@/page/TestDropdown.vue"),},
            {path: "/TestForm", component: () => import("@/page/TestForm.vue"),},
            {path: "/TestFormAce", component: () => import("@/page/TestFormAce.vue"),},
            {path: "/TestFormInput", component: () => import("@/page/TestFormInput.vue"),},
            {path: "/TestInput", component: () => import("@/page/TestInput"),},
            {path: "/TestLoading", component: () => import("@/page/TestLoading"),},
            {path: "/TestMenu", component: () => import("@/page/TestMenu.vue"),},
            {path: "/TestMessage", component: () => import("@/page/TestMessage"),},
            {path: "/TestModal", component: () => import("@/page/TestModal"),},
            {path: "/TestPage", component: () => import("@/page/TestPage"),},
            {path: "/TestRadio", component: () => import("@/page/TestRadio"),},
            {path: "/TestSelect", component: () => import("@/page/TestSelect"),},
            {path: "/TestTag", component: () => import("@/page/TestTag"),},
        ],
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
