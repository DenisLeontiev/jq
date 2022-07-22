import { defineStore, acceptHMRUpdate } from "pinia";
import employeesItems from "./employeesItems.json";

export const useEmployeesStore = defineStore({
  id: "employees",
  state: () => ({
    items: employeesItems,
  }),
  getters: {
    getItems: (state) => state.items,
  },
  actions: {
    async loadItems() {
      // await this.items.push(name)
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useEmployeesStore, import.meta.hot));
}
