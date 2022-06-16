export { default as UiPic } from "./Pic.vue";

export enum PicFit {
    cover = "cover",
    contain = "contain",
    fill = "fill",
    scaleDown = "scale-down",
    none = "none"
}

export interface PicProps {
    lazy?: boolean;
    src?: string,
    jpgSrc?: string,
    pngSrc?: string,
    webpSrc?: string,
    alt?: string,
    local?: boolean,
    fit?: PicFit,
    imgClass?: string,
}

export const picFits = [
  PicFit.cover,
  PicFit.contain,
  PicFit.fill,
  PicFit.scaleDown,
  PicFit.none,
];
