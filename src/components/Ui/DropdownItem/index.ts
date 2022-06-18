export { default as UiDropdownItem } from "./DropdownItem.vue";

export enum DropdownIconSize {
  s12 = 12,
  s16 = 16,
  s24 = 24,
}

export enum DropdownVariant {
  default = "default",
  link = "link",
  error = "error",
}

export interface DropdownItemProps {
  to?: string | object;
  target?: string;
  exact?: boolean;
  label?: string;
  text?:string;
  labelContent?: string;
  labelIcon?: string;
  prependIcon?: string;
  appendIcon?: string;
  variant?: DropdownVariant;
  iconSize?: DropdownIconSize;
  disabled?: boolean;
  selected?: boolean;
  check?: boolean;
  diffFont?: boolean;
}

export const dropdownVariants = [
  DropdownVariant.default,
  DropdownVariant.link,
  DropdownVariant.error,
];

export const dropdownIconSizes = [
  DropdownIconSize.s12,
  DropdownIconSize.s16,
  DropdownIconSize.s24,
];
