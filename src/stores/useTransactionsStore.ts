import { defineStore, acceptHMRUpdate } from "pinia";
import transactionsItems from "./transactionsItems.json";
import previewEmployeesItems from "./previewEmployeesItems.json";
import { useTableStore } from "./useTableStore";

export const useTransactionsStore = defineStore({
  id: "transactions",
  state: () => ({
    itemsMain: transactionsItems,
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
  import.meta.hot.accept(acceptHMRUpdate(useTransactionsStore, import.meta.hot));
}
