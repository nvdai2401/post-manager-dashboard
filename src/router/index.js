import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "post-list",
    component: () =>
      import(/* webpackChunkName: "post-list" */ "../views/post-list.vue")
  },
  {
    path: "/info",
    name: "info",
    component: () => import(/* webpackChunkName: "info" */ "../views/info.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("is_authenticated"));
  if (!isAuthenticated && to.name !== "login") next("/login");
  else next();
});

export default router;
