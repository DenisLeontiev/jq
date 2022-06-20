export { default as UiContainer } from "./Container.vue";

export enum ContainerVariant {
    inside = "inside",
    outside = "outside",
}

export interface ContainerProps {
    variant?: ContainerVariant
}

export const ContainerVariants = [
  ContainerVariant.inside,
  ContainerVariant.outside,
];
