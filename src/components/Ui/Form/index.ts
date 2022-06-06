export { default as UiForm } from './Form.vue';

export interface FormProps<T extends Record<any, any> = Record<any, any>> {
    modelValue?: T
};

export interface CommonFormFieldProps<Value = any> {
    name?: keyof CommonFormFieldProps<Value>;
    modelValue?: Value;
    disabled?: boolean;
};