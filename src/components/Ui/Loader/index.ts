export { default as UiLoader } from "./Loader.vue";

export enum LoaderSize {
    large = "large",
    medium = "medium",
    small = "small"
}

export interface LoaderProps {
    spin?: boolean;
    size?: LoaderSize;
}

export const loaderSizes = [
  LoaderSize.large,
  LoaderSize.medium,
  LoaderSize.small,
];
