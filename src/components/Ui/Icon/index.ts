

export { default as UiIcon } from "./Icon.vue";
export { default as UiIconsMap } from "./IconsMap.vue";

export enum IconPackage {
    filled = "Filled",
    outlined = "Outlined",
    colored = "Colored",
    flag = "Flag",
}

export enum IconVariant {
    pure = "pure",
    red = "red",
    lightBlue = "lightBlue",
    yellow = "yellow",
    violet = "violet",
    blue = "blue",
    green = "green",
    black = "black",
    pink = "pink",
    blueGray = "blueGray"
}

export interface IconProps {
    package?: IconPackage;
    icon: string;
    colored?: boolean;
    variant?: IconVariant;
}

export const iconPackages = [
  IconPackage.flag,
  IconPackage.filled,
  IconPackage.colored,
  IconPackage.outlined,
];

export const iconVariants = [
  IconVariant.pure,
  IconVariant.red,
  IconVariant.lightBlue,
  IconVariant.yellow,
  IconVariant.violet,
  IconVariant.blue,
  IconVariant.green,
  IconVariant.black,
  IconVariant.pink,
  IconVariant.blueGray,
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
