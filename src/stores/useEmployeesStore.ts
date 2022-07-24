import { defineStore, acceptHMRUpdate } from "pinia";
import employeesItems from "./employeesItems.json";
import { useTableStore } from "./useTableStore";

export const useEmployeesStore = defineStore({
  id: "employees",
  state: () => ({
    items: employeesItems,
  }),
  getters: {
    getItems: (state) => (name) => {
      const tableStore = useTableStore();
      const itemsByFilters = state.getItemsByFilters;
      return tableStore.getItemsByTableSort({ name, items: itemsByFilters });
    },
    getItemsByFilters: (state) => state.items,
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
