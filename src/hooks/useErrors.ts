import { computed, Ref, ref } from "vue";
import { ErrorsMap, SourceErrors } from "../components/Ui/Form";
import { arrayFrom } from "../utils";

export const useErrors = <T extends string>(initialErrors: SourceErrors<T> = []) => {
  const errors = ref<SourceErrors<T>>(initialErrors) as Ref<SourceErrors<T>>;

  const setErrors = (newErrors: SourceErrors<T>) => {
    errors.value = newErrors;
  };

  const clearErrors = () => {
    errors.value = [];
  };

  const errorsMap = computed<ErrorsMap<T>>(() => errors.value.reduce((acc, [field, error]) => ({
    ...acc,
    [field as unknown as string]: [[
      ...acc[field] || [],
      ...arrayFrom(error),
    ][0]],
  }), {} as ErrorsMap<T>));

  return {
    setErrors,
    clearErrors,
    errorsMap,
    errors,
  };
};
