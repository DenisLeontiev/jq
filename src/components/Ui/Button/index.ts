export { default as UiButton } from "./Button.vue";

export enum ButtonSize {
    xs = "xs",
    s = "s",
    m = "m",
    l = "l"
}

export enum ButtonVariant {
    primary = "primary",
    secondary = "secondary",
    tertiary = "tertiary",
    outline = "outline",
    outlineLight = "outlineLight",
    danger = "danger",
    outlineDanger = "outlineDanger",
    outlinePrimary = "outlinePrimary",
    dark = "dark",
    text = "text",
    filter = "filter"
}

export interface ButtonProps {
    to?: string | object
    target?: string;
    exact?: boolean;
    type?: "button" | "submit";
    disabled?: boolean;
    size?: ButtonSize;
    variant?: ButtonVariant;
    circle?: boolean;
    wide?: boolean;
    prependIcon?: string;
    appendIcon?: string;
    label?: string;
    focusable?: boolean;
    square?: boolean;
}

export const buttonVariants = [
  ButtonVariant.primary,
  ButtonVariant.secondary,
  ButtonVariant.tertiary,
  ButtonVariant.outlinePrimary,
  ButtonVariant.danger,
  ButtonVariant.outlineDanger,
  ButtonVariant.dark,
  ButtonVariant.text,
  ButtonVariant.filter,
];

export const buttonSizes = [
  ButtonSize.xs,
  ButtonSize.s,
  ButtonSize.m,
  ButtonSize.l,
];
