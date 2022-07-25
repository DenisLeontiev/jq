export { default as UiDialog } from "./Dialog.vue";

export enum DialogVariant {
    round = "round",
    stack = "stack"
}

export interface DialogProps {
    closeable?: boolean;
    returnable?: boolean;
    variant?: DialogVariant;
    title?: string;
}

export const dialogVariants = [
  DialogVariant.round,
  DialogVariant.stack,
];
