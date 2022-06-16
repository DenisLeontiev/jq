import { AvatarSize } from "./types";

export { default as UiAvatar } from "./Avatar.vue";
export {
  AvatarSize,
  avatarSizes,
} from "./types";

export interface AvatarProps {
    userId?: number;
    src?: string;
    username?: string;
    icon?: string;
    size?: AvatarSize;
}
