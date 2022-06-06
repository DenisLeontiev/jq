import {
  computed, nextTick, Ref, ref, watch,
} from "vue";

export const useToggle = <T = any>(
  defaultValue: T = false as unknown as T,
  trueValue: T = true as unknown as T,
  falseValue: T = false as unknown as T,
): [
    Ref<T>,
    () => void,
    (newValue: T) => void,
    {
      show: () => void,
      hide: () => void,
    },
    Ref<T>,
] => {
  const value = ref<T>(defaultValue) as Ref<T>;
  const delayValue = ref<T>(defaultValue) as Ref<T>;

  watch(value, (newValue) => {
    nextTick(() => {
      delayValue.value = newValue;
    });
  }, {
    immediate: true,
  });

  const checked = computed(() => (value.value === trueValue));

  const toggle = () => {
    value.value = checked.value ? falseValue : trueValue;
  };

  const set = (newValue: T) => {
    value.value = newValue;
  };

  const show = () => {
    value.value = trueValue;
  };

  const hide = () => {
    value.value = falseValue;
  };

  return [value, toggle, set, { show, hide }, delayValue];
};
