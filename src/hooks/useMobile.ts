import {
  inject,
  InjectionKey, provide, Ref,
} from "vue";
import { useState } from "./useState";

export const isMobileInjectionKey: InjectionKey<Ref<boolean>> = Symbol("isMobile");

export const useMobileContext = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  provide(isMobileInjectionKey, isMobile);

  return {
    isMobile,
    setIsMobile,
  };
};

export const useMobile = () => inject(isMobileInjectionKey)!;
