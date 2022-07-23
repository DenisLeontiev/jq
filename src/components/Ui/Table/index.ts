export { default as UiTable } from "./Table.vue";

export interface TableProps {
    isSort?: boolean;
    bodyItems: Array<string>;
    name: string;
}

export interface TableSortProps {
    sort?: string;
}
