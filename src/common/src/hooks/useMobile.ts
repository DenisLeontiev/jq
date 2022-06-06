import {
  inject, InjectionKey, provide, readonly, ref, Ref,
} from "vue";
import { useState } from "./useState";

export const isMobileInjectionKey: InjectionKey<Ref<Readonly<boolean>>> = Symbol("isMobile");

export const useMobileProvider = (initialState: boolean) => {
  const [isMobile, setIsMobile] = useState(initialState);

  provide(isMobileInjectionKey, isMobile);

  return {
    isMobile,
    setIsMobile,
  };
};

export const useMobile = () => ({
  isMobile: inject(isMobileInjectionKey, readonly(ref(false))),
});
