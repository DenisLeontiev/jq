export { default as UiModal } from "./Modal.vue";

export enum ModalVariant {
    center = "center",
    stack = "stack"
}

export interface ModalProps {
    variant?: ModalVariant;
    closeable?: boolean;
}

export const modalVariants = [
  ModalVariant.center,
  ModalVariant.stack,
];
