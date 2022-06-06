import {
  Ref, readonly, ref, watchEffect,
} from "vue";

export const useState = <T>(initialState: T): [
    Ref<T>,
    (newValue: T) => void,
] => {
  const value = ref();

  watchEffect(() => {
    value.value = initialState;
  });

  const setValue = (newValue: T) => {
    value.value = newValue;
  };

  return [readonly(value), setValue];
};
