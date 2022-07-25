import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Transactions from "./views/Transactions.vue";
import Employees from "./views/Employees.vue";
import EmployeesId from "./views/EmployeesId.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/transactions",
    name: "Transactions",
    component: Transactions,
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
