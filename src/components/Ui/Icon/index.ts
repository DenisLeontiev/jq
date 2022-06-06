

export { default as UiIcon } from "./Icon.vue";
export { default as UiIconsMap } from "./IconsMap.vue";

export enum IconPackage {
    outlined = "Outlined",
}

export interface IconProps {
    package?: IconPackage;
    icon: string;
    colored?: boolean;
}

export const iconPackages = [
  IconPackage.outlined,
];

export const clearIconName = (icon: string) => icon
  .replace(/\.\/assets\/(.*)\.svg$/, "$1")
  .split("/")
  .map((part) => (part.replace(/[\s-]/g, "")))
  .join("_");

export const filterIconName = (iconName: string) => (
  (iconName.startsWith("Flag") && ["RU", "US"].some((country) => iconName.includes(country)))
        || (!iconName.startsWith("Flag"))
);
