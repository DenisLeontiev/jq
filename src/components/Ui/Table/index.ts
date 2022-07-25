export { default as UiTable } from "./Table.vue";

export enum TableSize {
    small = "small",
    regular = "regular",
}

export interface TableProps {
    isSort?: boolean;
    bodyItems: Array<string>;
    name: string;
    size?: TableSize;
}
export const tableSizes = [
  TableSize.small,
  TableSize.regular,
];

export interface TableSortProps {
    sort?: string;
}

export interface TableItemProps {
    label?: any;
    variant?: string;
    extra?: string;
}

export interface TableItemFeedbackProps {
    items?: Array<string>;
    isFeedback?: boolean;
}
