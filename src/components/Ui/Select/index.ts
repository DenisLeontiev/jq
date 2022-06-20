export { default as UiSelect } from "./Select.vue";

export interface SelectProps {
    name?: string;
    disabled?: boolean;
    prependIcon?: string;
    appendIcon?: string;
    label?: string;
    processing?: boolean;
    required?: boolean;
    meta?: string;
    suffix?: string;
    postfix?: string;
    badge?: string | number;
    empty?: boolean;
    error?: string | string[];
    customIcon?: boolean;

    asPopup?: boolean;
    modelValue?: any | Array<any>;
    options?: Array<any>;
    displayField?: string;
    valueField?: string;
}
