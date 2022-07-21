import { defineStore, acceptHMRUpdate } from "pinia";

export const useEmployeesStore = defineStore({
  id: "employees",
  state: () => ({
    items: [],
  }),
  getters: {
    items: (state) => state.items,
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
