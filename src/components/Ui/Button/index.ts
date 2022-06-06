export { default as UiButton } from './Button.vue';

export enum ButtonVariant {
    primary = 'primary',
    secondary = 'secondary',
    outline = 'outline',
    outlineWhite = 'ButtonSize',
    white = 'white',
    gradient = 'gradient'
}

export interface ButtonProps {
    to?: string | object
    target?: string;
    exact?: boolean;
    type?: 'button' | 'submit';
    disabled?: boolean;
    variant?: ButtonVariant;
    circle?: boolean;
    prependIcon?: string;
    appendIcon?: string;
    label?: string;
    focusable?: boolean;
    wide?: boolean;
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
];

export const buttonSizes = [
  ButtonSize.xs,
  ButtonSize.s,
  ButtonSize.m,
  ButtonSize.l,
];
