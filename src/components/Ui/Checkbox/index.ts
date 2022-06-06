import { CommonFormFieldProps } from "../Form";

export { default as UiCheckbox } from "./Checkbox.vue";

export enum CheckboxVariant {
    checkbox = "checkbox",
    radio = "radio",
    switch = "switch",
}

export interface CheckboxProps {
    variant?: CheckboxVariant;
    trueValue?: any;
    falseValue?: any;
    label?: string;
    reverse?: boolean;

    name?: string;
    modelValue?: any;
    disabled?: boolean;
}

export const checkboxVariants = [
  CheckboxVariant.checkbox,
  CheckboxVariant.radio,
  CheckboxVariant.switch,
];