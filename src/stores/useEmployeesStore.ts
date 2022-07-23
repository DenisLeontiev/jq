import { defineStore, acceptHMRUpdate } from "pinia";
import employeesItems from "./employeesItems.json";
import { useTableStore } from "./useTableStore";

export const useEmployeesStore = defineStore({
  id: "employees",
  state: () => ({
    items: employeesItems,
  }),
  getters: {
    getItems: (state) => state.getItemsByTableSort,
    getItemsByTableSort: (state) => {
      const name = "employeesMain";
      const tableStore = useTableStore();
      const filterCurrentTable = tableStore.getFilterCurrentTable(name);
      if (filterCurrentTable && filterCurrentTable.length) {
        const { column, sort } = filterCurrentTable[0];
        const items = Array.from(state.items);
        items.sort((a, b) => {
          if (a[column].label > b[column].label) {
            return 1;
          }
          if (a[column].label < b[column].label) {
            return -1;
          }
          return 0;
        });
        return sort === "up" ? items : items.reverse();
      }
      return state.items;
    },
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
