import { defineStore, acceptHMRUpdate } from "pinia";

interface ColumnFilters {
  name: string;
  column: string;
  sort: string|null;
}

export interface TableState {
  columnFilters: Array<ColumnFilters>;
}

export const useTableStore = defineStore({
  id: "table",
  state(): TableState {
    return {
      columnFilters: [],
    };
  },
  getters: {
    getFilterCurrentTable: (state) => (name) => state.columnFilters.filter((filter) => filter.name === name) || [],
    getFilterCurrentColumn: (state) => (obj) => state.getFilterCurrentTable(obj.name).find((filter) => filter.column === obj.column),
    getSortCurrentColumn: (state) => (obj) => state.getFilterCurrentColumn(obj)?.sort || null,
    getItemsByTableSort: (state) => (obj) => {
      const filterCurrentTable = state.getFilterCurrentTable(obj.name);
      if (filterCurrentTable && filterCurrentTable.length) {
        const { column, sort } = filterCurrentTable[0];
        const cloneItems = Array.from(obj.items);
        const items = cloneItems.sort((a, b) => a[column].label.localeCompare(b[column].label, undefined, {
          numeric: true,
          sensitivity: "base",
        }));
        return sort === "up" ? items.reverse() : items;
      }
      return obj.items;
    },
  },
  actions: {
    setColumnFilters(name:string, column:string) {
      const item = { name, column };
      const currentFilter = this.getFilterCurrentColumn({ name, column });

      if (currentFilter) {
        if (currentFilter.sort === "up") item.sort = "down";
      } else {
        item.sort = "up";
      }

      this.removeOtherFilter(name);

      if (item.sort) this.columnFilters.push(item);
    },
    removeOtherFilter(name) {
      const filterCurrentTable = this.getFilterCurrentTable(name);
      if (filterCurrentTable && filterCurrentTable.length) {
        const index = this.columnFilters.indexOf(filterCurrentTable);
        this.columnFilters.splice(index, 1);
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTableStore, import.meta.hot));
}
