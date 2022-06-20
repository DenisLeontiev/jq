export { default as Field } from "./Field.vue";

export enum FieldState {
    bordered = "bordered",
    filled = "filled",
    underline = "underline",
    undisabled = "undisabled",
}

export enum FieldSize {
    default = "default",
    medium = "medium"
}

export enum FieldOuterState {
    default = "default",
    underline = "underline",
    undisabled = "undisabled",
    password = "password",
    auth = "auth",
}

export interface FieldProps {
    label: string;
    error: string;
    required: boolean;
    state: FieldState | string;
    disabled: boolean;
    focused: boolean;
    hint: string;
    meta: string;
    triggerClass: string;
    inputClass: string;
    asLabel: boolean;
    size: FieldSize | string;
    name: string;
    prependIcon: string;
    appendIcon: string;
    iconClass: string;
    customIcon: boolean;
}

export const fieldStates = [
  FieldState.filled,
  FieldState.bordered,
  FieldState.underline,
];

export const fieldOuterStates = [
  FieldOuterState.default,
  FieldOuterState.underline,
  FieldOuterState.password,
  FieldOuterState.auth,
];

export const fieldSizes = [
  FieldSize.medium,
  FieldSize.default,
];
