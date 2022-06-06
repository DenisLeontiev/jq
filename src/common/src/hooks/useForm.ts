import {
  computed,
  inject,
  InjectionKey, provide, ref, Ref, watchEffect,
} from "vue";
import { useState } from "./useState";
import { useLocalValue } from "./useLocalValue";
import { Errors, ErrorsMap, useErrors } from "./useErrors";
import { arrayFrom, filteredArray } from "../utils";

type FormValues = Record<any, any>

export interface FormInjection<T = FormValues> {
  values: Ref<T>
  errorsMap: Ref<ErrorsMap<T>>
  touched: Ref<Array<keyof T>>
}

export interface FormSubmitHandlerParams<T = FormValues> {
  values: T;
  event: SubmitEvent;
  setErrors(errors: Errors<T>): void;
  clearErrors(): void;
}

export interface UseFormOptions<T = FormValues> {
  submitHandler?(params: FormSubmitHandlerParams<T>): void;
}

const formInjectionKey: InjectionKey<FormInjection<any> | null> = Symbol("formInjection");

export const useForm = <Values extends FormValues>(initialValues = ref<Values>(), {
  submitHandler,
}: UseFormOptions<any> = {}) => {
  const [values, setValues] = useState<Values>(initialValues.value, false);

  watchEffect(() => {
    setValues(initialValues.value || {} as Values);
  });

  const {
    errorsMap,
    clearErrors,
    setErrors,
  } = useErrors<Values>();

  const touched = ref<Array<keyof Values>>([]);

  provide<FormInjection<Values>>(formInjectionKey, {
    values,
    errorsMap,
    touched,
  });

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event: SubmitEvent) => {
    if (submitting.value) {
      return;
    }
    setSubmitting(true);
    clearErrors();
    touched.value = Object.keys(values.value) as typeof touched.value;
    await submitHandler?.({
      values,
      event,
      setErrors,
      clearErrors,
    });
  };

  return {
    values,
    setValues,
    onSubmit,
  };
};

export const useField = <
    Values = FormValues,
    Field extends keyof Values = keyof Values,
    Value = Field extends keyof Values ? Values[Field] : never,
    Props = Record<any, any>
    >(
    props: Props,
    field: Ref<Field | undefined>,
    localField?: keyof Props,
    emit?: any,
  ) => {
  const formInjection = inject(formInjectionKey, null);

  const [localValue, setLocalValue] = useLocalValue(props, localField, emit);

  const value = computed<Value>({
    get: () => (
      formInjection ? formInjection.values.value[field.value] : localValue.value
    ),
    set: (newValue: Value) => {
      if (formInjection) {
        formInjection.values.value[field.value] = newValue;
      }
      setLocalValue(newValue as any);
    },
  });

  const setValue = (newValue: Value) => {
    value.value = newValue;
  };

  const localTouched = ref(false);

  const touched = computed<boolean>({
    get() {
      return formInjection ? (
        field.value
          ? formInjection.touched.value.includes(field.value)
          : localTouched.value
      ) : localTouched.value;
    },
    set(newTouched: boolean) {
      localTouched.value = newTouched;
      if (formInjection && field.value) {
        const index = formInjection.touched.value.indexOf(field.value);
        if (index === -1) {
          formInjection.touched.value.push(field.value);
        } else {
          formInjection.touched.value.splice(index, 1);
        }
      }
    },
  });

  const error = computed(() => filteredArray(
    arrayFrom(
      (field.value && formInjection && (
        formInjection?.errorsMap.value?.[field.value]
      )) || (props as any).error,
    ),
  ));

  return {
    value,
    setValue,
    touched,
    error,
  };
};
