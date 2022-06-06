import {
  onBeforeUnmount, onMounted, watchEffect, ref,
} from "vue";
import { isSSR } from "../utils";

export const useVh = () => {
  const calcVh = () => (isSSR ? "1vh" : `${window.innerHeight / 100}px`);
  const vh = ref(calcVh());

  const handleVh = () => {
    vh.value = calcVh();
  };

  onMounted(() => {
    window.addEventListener("resize", handleVh);
    window.addEventListener("orientationchange", handleVh);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", handleVh);
    window.removeEventListener("orientationchange", handleVh);
  });

  return {
    vh,
  };
};
