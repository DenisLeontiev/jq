import {
  inject, InjectionKey, provide, Ref,
} from "vue";
import { useState } from "./useState";
import { Theme } from "../../src/types";

export const themeInjectionKey: InjectionKey<Ref<Theme>> = Symbol("theme");

export const useThemeContext = () => {
  const [theme, setTheme] = useState<Theme>(Theme.light);

  provide(themeInjectionKey, theme);

  return {
    theme,
    setTheme,
  };
};

export const useTheme = () => inject(themeInjectionKey)!;
