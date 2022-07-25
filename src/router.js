import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Employees from "./views/Employees.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
