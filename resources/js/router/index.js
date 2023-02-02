import { h, resolveComponent } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import DefaultLayout from "../layouts/DefaultLayout.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: DefaultLayout,
        redirect: "/dashboard",
        children: [
            {
                path: "/dashboard",
                name: "Dashboard",
                meta: {
                    authRequired: true,
                },
                component: () => import("../views/Dashboard.vue"),
            },
            {
                path: "/users/add",
                name: "Add Users",
                meta: {
                    authRequired: true,
                },
                component: () => import("../views/Users/AddUsers.vue"),
            },
            {
                path: "/users",
                name: "Users",
                meta: {
                    authRequired: true,
                },
                component: () => import("../views/Users/Users.vue"),
            },
        ],
    },
    {
        path: "/pages",
        redirect: "/pages/404",
        name: "Pages",
        component: {
            render() {
                return h(resolveComponent("router-view"));
            },
        },
        children: [
            {
                path: "404",
                name: "Page404",
                component: () => import("../views/pages/Page404.vue"),
            },
            {
                path: "500",
                name: "Page500",
                component: () => import("../views/pages/Page500.vue"),
            },
            {
                path: "register",
                name: "Register",
                component: () => import("../views/pages/Register.vue"),
            },
        ],
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/pages/Login.vue"),
    },
];

const isLoggedIn = () => {
    const userToken = localStorage.getItem("token");
    if (token) return true;
    return false;
};

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 };
    },
});

router.beforeEach((to, from, next) => {
    if (to.meta.authRequired) {
        if (isLoggedIn) {
            next();
        } else {
            next("/login");
        }
    } else {
        next();
    }
});
export default router;
