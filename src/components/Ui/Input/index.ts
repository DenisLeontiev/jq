import { FieldOuterState, FieldProps } from "../Field";

export { default as Input } from "./Input.vue";
export { FieldOuterState as InputState } from "../Field";
export { fieldOuterStates as inputStates } from "../Field";

export enum InputType {
    text = "text",
    number = "number",
    textarea = "textarea"
}

export interface InputProps extends Pick<FieldProps, "label" | "error" | "required" | "disabled" | "hint" | "meta" | "size" | "name"> {
    modelValue: string | number,
    placeholder: string;
    type: InputType | string;
    state: FieldOuterState | string;
    inputClass: string;
    rows: number;
    mask: string;
    autofocus: boolean;
}

export const inputTypes = [
  InputType.text,
  InputType.number,
  InputType.textarea,
];
