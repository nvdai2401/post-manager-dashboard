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
    path: "/sign-in",
    name: "sign-in",
    component: () =>
      import(/* webpackChunkName: "sign-in" */ "../views/sign-in.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = JSON.parse(localStorage.getItem("is_authenticated"));
  if (!isAuthenticated && to.name !== "sign-in") next("/sign-in");
  else next();
});

export default router;
