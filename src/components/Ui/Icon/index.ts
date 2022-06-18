export { default as UiIcon } from "./Icon.vue";
export { default as UiIconsMap } from "./IconsMap.vue";

export interface IconProps {
    icon: string;
    colored?: boolean;
    custom?: boolean;
}

export const clearIconName = (icon: string) => icon
  .replace(/\.\/assets\/(.*)\.svg$/, "$1")
  .split("/")
  .map((part) => (part.replace(/[\s-]/g, "")))
  .join("_");
