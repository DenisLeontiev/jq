export { default as UiBreadcrumbs } from "./Breadcrumbs.vue";

export interface BreadcrumbsItemProps {
    title?: string;
    to?: string;
    href?: string;
}

export interface BreadcrumbsProps {
    items: Array<BreadcrumbsItemProps>;
    path?: string;
}
