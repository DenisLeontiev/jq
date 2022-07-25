import { defineStore, acceptHMRUpdate } from "pinia";
import employeesItems from "./employeesItems.json";
import previewEmployeesItems from "./previewEmployeesItems.json";
import { useTableStore } from "./useTableStore";

export const useEmployeesStore = defineStore({
  id: "employees",
  state: () => ({
    itemsMain: employeesItems,
    itemsPreview: previewEmployeesItems,
  }),
  getters: {
    getItems: (state) => (name, type) => {
      const tableStore = useTableStore();
      const itemsByFilters = state.getItemsByFilters(type);
      return tableStore.getItemsByTableSort({ name, items: itemsByFilters });
    },
    getItemsByFilters: (state) => (type) => state[`items${type}`]
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
