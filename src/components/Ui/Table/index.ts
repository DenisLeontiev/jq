export { default as UiTable } from "./Table.vue";

export interface TableBodyItemsProps {
    title?: string;
    to?: string;
    href?: string;
}

export interface TableProps {
    isSort?: boolean;
    bodyItems: Array<string>;
}
