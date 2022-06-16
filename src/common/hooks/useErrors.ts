import { computed } from "vue";
import { useState } from "./useState";

export type Error<T extends Record<string, any>> = [keyof T, string]

export type Errors<T extends Record<string, any>> = Array<Error<T>>

export type ErrorsMap<T extends Record<string, any>> = {
    [key in keyof T]: string[]
}

export const useErrors = <Form extends Record<string, any>>(initialErrors: Errors<Form> = []) => {
  const [errors, setErrors] = useState(initialErrors, false);

  const errorsMap = computed<ErrorsMap<Form>>(() => (
    errors.value.reduce((map, [field, error]) => ({
      ...map,
      ...(typeof field === "string" ? {
        [field]: [...map[field] ?? [], error],
      } : {}),
    }), {} as ErrorsMap<Form>)
  ));

  const clearErrors = () => {
    setErrors([]);
  };

  return {
    errorsMap,
    setErrors,
    clearErrors,
  };
};
