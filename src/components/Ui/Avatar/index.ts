import { AvatarSize } from "./types";

export { default as UiAvatar } from "./Avatar.vue";
export {
  AvatarSize,
  avatarSizes,
} from "./types";

export interface AvatarProps {
    src?: string;
    text?: string;
    border?: boolean;
    size?: AvatarSize;
}
