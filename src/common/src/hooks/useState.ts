import {
  readonly, ref, watchEffect, Ref,
} from "vue";

export const useState = <State>(
  initialState?: State,
  ro = true,
  trueValue: State = true as unknown as State,
  falseValue: State = false as unknown as State,
): [
    Ref<State>,
    (newState: State) => void,
    () => void,
] => {
  const state = ref<State>();

  watchEffect(() => {
    state.value = initialState;
  });

  const setState = (newState: State) => {
    state.value = newState;
  };

  const toggle = () => {
    state.value = state.value === trueValue ? falseValue : trueValue;
  };

  return [(ro ? readonly(state) : state) as Ref<State>, setState, toggle];
};
