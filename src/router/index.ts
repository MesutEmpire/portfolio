import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about-me",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/projects",
      name: "about",
      component: () => import("../views/ProjectsView.vue"),
    },
    {
      path: "/contacts",
      name: "about",
      component: () => import("../views/ContactsView.vue"),
    },
  ],
});

export default router;
