export { default as UiStatus } from "./Status.vue";

export enum StatusVariant {
    Inactive = "Inactive",
    Active = "Active",
    Deactivated = "Deactivated",
    Created = "Created",
}

export interface StatusProps {
    variant?: StatusVariant;
}

export const contactVariants = [
  StatusVariant.Inactive,
  StatusVariant.Active,
  StatusVariant.Deactivated,
  StatusVariant.Created,
];
