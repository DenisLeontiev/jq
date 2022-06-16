export { default as UiLogo } from "./Logo.vue";
export { default as UiLogosMap } from "./LogosMap.vue";

export enum LogoVariant {
    main = "main",
}

export interface LogoProps {
    variant?: LogoVariant
}

export const clearLogoName = (logoName: string) => logoName.replace(/\.\/assets\/(.*).svg/, "$1").replace(/\s/g, "");
