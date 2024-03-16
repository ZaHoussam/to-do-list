import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    meta: {
      title: "Home Page",
    },
  },
  {
    path: "/list",
    name: "list",
    component: () => import("../views/ListView.vue"),
    meta: {
      title: "List Page",
    },
  },
];

const router = createRouter({
  history: createWebHistory("/to-do-list/"),
  routes,
});

router.beforeEach((to, next) => {
  (document.title = to.meta.title), next;
});
export default router;
