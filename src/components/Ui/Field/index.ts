export { default as Field } from './Field.vue';

export interface FieldProps {
    name?: string;
    disabled?: boolean;
    label?: string;
    content?: string;
    processing?: boolean;
    required?: boolean;
    empty?: boolean;
    error?: string | string[];
    displayValue?: string;
    helperText?: string;
};