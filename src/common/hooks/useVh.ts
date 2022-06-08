import { ref, watchEffect } from "vue";
import { isSSR } from "../utils";

const calcVh = (): string => (isSSR ? "1vh" : `${window.innerHeight / 100}px`);

export const useVh = () => {
  const vh = ref(calcVh());

  if (!isSSR) {
    const handleVh = () => {
      vh.value = calcVh();
    };
    watchEffect((onCleanup) => {
      window.addEventListener("resize", handleVh);
      window.addEventListener("orientationchange", handleVh);

      onCleanup(() => {
        window.removeEventListener("resize", handleVh);
        window.removeEventListener("orientationchange", handleVh);
      });
    });
  }

  return {
    vh,
  };
};
