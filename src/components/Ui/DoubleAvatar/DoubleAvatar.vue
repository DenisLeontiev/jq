<template>
  <div :class="$style.doubleAvatar">
    <UiAvatar
      :src="srcLeft"
      :size="36"
      :text="textLeft"
      :class="[$style.avatar, $style.left]"
      :border="true"
    />
    <UiAvatar
      :src="srcRight"
      :size="36"
      :text="textRight"
      :class="[$style.avatar, $style.right]"
      :border="true"
    />
  </div>
</template>

<script lang="ts" setup>
import UiAvatar from "../Avatar/Avatar.vue";
import { DoubleAvatarProps } from "./index";

withDefaults(
  defineProps<DoubleAvatarProps>(),
  {},
);
</script>

<style lang="scss" module>
@import "../../../assets/utils";
.doubleAvatar {
  @extend %flex-start;
}
.avatar {
  &.left {
    z-index: 1;
  }
  &.right {
    z-index: 1;
    margin-left: rem(-8px);
  }
}
</style>
