import { readonly, ref } from "vue";

// @TODO: timer
export const useNow = () => {
  const now = ref(new Date());

  return {
    now: readonly(now),
  };
};
