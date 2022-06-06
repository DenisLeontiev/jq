import { defineStore } from "pinia";
import {
  ref, toRefs, watchEffect,
} from "vue";
import { Theme, useMobile, useState } from "../hooks";
import { isSSR } from "../utils";

export enum Breakpoint {
  wide = "wide",
  desktop = "desktop",
  tiny = "tiny"
}

const breakpoints: Array<[Breakpoint, number, "max" | "min"]> = [
  [Breakpoint.wide, 941, "min"],
  [Breakpoint.desktop, 940, "max"],
  [Breakpoint.tiny, 375, "max"],
];

const checkMatches = (comp: "max" | "min", value: number) => (
  window.matchMedia(`(${comp}-width: ${value})`)
);

export const useLayoutStore = defineStore("layout", () => {
  const [theme, setTheme] = useState<Theme>(Theme.light, false);

  const {
    isMobile,
  } = useMobile();

  const breakpointsMap = ref<Record<Breakpoint, boolean>>(
    breakpoints.reduce((acc, [name, value, comp]) => ({
      ...acc,
      [name]: isSSR ? isMobile.value : checkMatches(comp, value).matches,
    }), {} as Record<Breakpoint, boolean>),
  );

  if (!isSSR) {
    watchEffect(() => {
      breakpoints.forEach(([name, value, comp]) => {
        checkMatches(comp, value).addEventListener("change", (e) => {
          breakpointsMap.value[name] = e.matches;
        });
      });
    });
  }

  return {
    theme,
    setTheme,
    bps: breakpointsMap,
  };
});
