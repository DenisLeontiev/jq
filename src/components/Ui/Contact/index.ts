export { default as UiContact } from "./Contact.vue";

export enum ContactVariant {
    Email = "Email",
    Phone = "Phone",
    Mapmarker = "Mapmarker",
}

export interface ContactProps {
    variant?: ContactVariant
    href: string
    label: string
}

export const contactVariants = [
  ContactVariant.Email,
  ContactVariant.Phone,
  ContactVariant.Mapmarker,
];
