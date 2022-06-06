import { SchemaOf } from "yup";
import {
    computed, ComputedRef, inject, InjectionKey, Ref, SetupContext,
} from "vue";

export { default as Form } from "./Form.vue";

export type SourceError<T extends string> = [T, string | string[]]

export type SourceErrors<T extends string> = Array<SourceError<T>>

export type ErrorsMap<T extends string> = Record<T, string[]>

export const errorsInjectionKey: InjectionKey<ComputedRef<ErrorsMap<any>> | null> = Symbol("errorsMap");
export const formValuesInjectionKey: InjectionKey<Ref<any> | null> = Symbol("formValues");
export const touchedInjectionKey: InjectionKey<Ref<Record<string, boolean>> | null> = Symbol("touchedMap");

export interface FormProps<Values extends Record<string, any>> {
    modelValue: Values,
    validationSchema: SchemaOf<Values>,
    validateOnMount: boolean,
    validateOnBlur: boolean,
    validateOnInput: boolean,
}

export interface FormFieldOptions<T extends Record<any, any>> {
    props: T,
    emit: SetupContext["emit"],
    modelField: keyof T;
    modelEvent: string;
}

export const useFormField = <
    T extends Record<any, any> = Record<any, any>,
    Options extends Partial<FormFieldOptions<T>> = Partial<FormFieldOptions<T>>
    >(
    fieldName: Ref<string>, {
        props,
        emit,
        modelField = "modelValue",
        modelEvent = "update:modelValue",
    } = {} as Options,
) => {
    const errorsMap = inject(errorsInjectionKey, () => null, true);
    const values = inject(formValuesInjectionKey, () => null, true);
    const touchedMap = inject(touchedInjectionKey, () => null, true);

    const error = computed(() => (errorsMap ? errorsMap.value[fieldName.value] : undefined));

    const touched = computed<boolean | undefined>({
        get() {
            return touchedMap ? touchedMap.value[fieldName.value] : undefined;
        },
        set(newValue) {
            if (!touchedMap) {
                return;
            }
            touchedMap.value = {
                ...touchedMap.value,
                [fieldName.value]: newValue!,
            };
        },
    });

    const value = computed({
        get() {
            return values ? values.value[fieldName.value] : undefined;
        },
        set(newValue) {
            if (!values) {
                return;
            }
            values.value[fieldName.value] = newValue;
        },
    });

    const combinedValue = computed({
        get() {
            return (values && fieldName.value) ? value.value : (props ? props[modelField] : null);
        },
        set(newValue) {
            if (values && fieldName.value) {
                value.value = newValue;
            }
            if (emit) {
                emit(modelEvent, newValue);
            }
        },
    });

    return {
        hasFormInjection: !!values,
        error,
        formValue: value,
        value: combinedValue,
        touched,
    };
};
