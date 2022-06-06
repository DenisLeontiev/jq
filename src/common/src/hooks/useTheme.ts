import {
  inject, InjectionKey, provide, readonly, ref, Ref,
} from "vue";
import { useState } from "./useState";

export enum Theme {
  light = "light",
  dark = "dark"
}

export const themeInjectionKey: InjectionKey<Ref<Readonly<Theme>>> = Symbol("theme");

export const useThemeProvider = (initialState: Theme) => {
  const [theme, setTheme] = useState(initialState);

  provide(themeInjectionKey, theme);

  return {
    theme,
    setTheme,
  };
};

export const useTheme = () => ({
  theme: inject(themeInjectionKey, readonly(ref(Theme.light))),
});
