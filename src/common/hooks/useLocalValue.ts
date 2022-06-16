import {
  computed,
  EmitsOptions, Ref,
} from "vue";

export const useLocalValue = <
    Props extends Record<any, any>,
    Key extends keyof Props,
    Events extends EmitsOptions,
    Value = Props[Key] | null
>(
    props: Props,
    key?: Key,
    // @TODO typings
    emit?: any,
  ): [
      Ref<Value>,
      (newValue: Value) => void
] => {
  const value = computed<Value>({
    get: () => (key ? props[key] : null) as Value,
    set: (newValue: Value) => {
      if (key) {
        emit?.(`update:${String(key)}`, newValue);
      }
    },
  });

  const setValue = (newValue: Value) => {
    value.value = newValue;
  };

  return [
    value,
    setValue,
  ];
};
