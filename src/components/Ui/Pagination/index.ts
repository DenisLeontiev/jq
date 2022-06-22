export { default as UiPagination } from "./Pagination.vue";

export enum PaginationVariant {
    light = "light",
    regular = "regular",
}

export interface PaginationProps {
    count: number;
    current: number;
    variant?: PaginationVariant
}

export const paginationSizes = [
  PaginationVariant.light,
  PaginationVariant.regular,
];
