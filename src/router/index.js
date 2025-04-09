import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Medicaments from "@/pages/Medicaments.vue";

const routes = [
  {
    path: "/",
    component: MainLayout, 
    children: [
      { path: "", component: Home },
      { path: "about", component: About },
      { path: "medicaments", component: Medicaments },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
