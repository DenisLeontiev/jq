import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Employees from "./views/Employees.vue";
import EmployeesId from "./views/EmployeesId.vue";

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
  {
    path: "/employees/:id",
    name: "EmployeesId",
    component: EmployeesId,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
