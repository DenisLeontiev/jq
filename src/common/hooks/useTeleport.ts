import {
  inject, InjectionKey, provide, Ref,
} from "vue";
import { useState } from "./useState";

export const teleportInjectionKey: InjectionKey<Ref<HTMLElement>> = Symbol("teleportInjectionKey");

export const useTeleportContainer = () => {
  const [container, setContainer] = useState<HTMLElement>();

  provide(teleportInjectionKey, container);

  return {
    setContainer,
  };
};

export const useTeleport = () => inject(teleportInjectionKey)!;
