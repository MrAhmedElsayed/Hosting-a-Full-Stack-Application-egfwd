import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "dashboard",
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/dashboard/Dashboard.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/orders",
    name: "orders",
    component: () => import("@/views/OrdersDetail"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("@/views/UserDetail"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/products",
    name: "products",
    component: () => import("@/views/ProductsDetail"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/icons",
    name: "icons",
    component: () => import("@/views/icons/Icons.vue"),
  },
  {
    path: "/form-layouts",
    name: "form-layouts",
    component: () => import("@/views/form-layouts/FormLayouts.vue"),
  },
  {
    path: "/simple-table",
    name: "simple-table",
    component: () => import("@/views/simple-table/SimpleTable.vue"),
  },
  {
    path: "/typography",
    name: "typography",
    component: () => import("@/views/typography/Typography.vue"),
  },
  {
    path: "/pages/account-settings",
    name: "pages-account-settings",
    component: () =>
      import("@/views/pages/account-settings/AccountSettings.vue"),
  },
  {
    path: "/cards",
    name: "cards",
    component: () => import("@/views/cards/Card.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/pages/login",
    name: "pages-login",
    component: () => import("@/views/pages/Login.vue"),
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/pages/register",
    name: "pages-register",
    component: () => import("@/views/pages/Register.vue"),
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/error-404",
    name: "error-404",
    component: () => import("@/views/Error.vue"),
    meta: {
      layout: "blank",
    },
  },
  {
    path: "*",
    redirect: "error-404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// check if user is logged in
router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  let user_have_token = localStorage.getItem("token");
  if (requiresAuth && !user_have_token) {
    next("/pages/login");
  } else {
    next();
  }
});

export default router;
