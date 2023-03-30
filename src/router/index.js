import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    meta: {
      title: "Welcome to the FakeStore",
    },
  },
  {
    path: "/categories/:category",
    name: "categories",
    props: true,
    component: () => import("../views/CategoriesView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const title = to.meta.title;

  const titleCategory = to.params.category;

  if (title) {
    document.title = title;
  }
  if (titleCategory) {
    document.title = "Categories -> " + titleCategory;
  }
  // Continue resolving the route
  next();
});

export default router;
