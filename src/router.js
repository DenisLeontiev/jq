import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Employees from "./views/Employees.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/employees",
    name: "Employees",
    component: Employees,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
