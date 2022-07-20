<template>
  <div
    :class="[
      $style.avatar,
      border && $style.border,
      (!src && text) && $style.border,
      $style[`size-s${size}`]
    ]"
  >
    <UiPic
      v-if="!!src"
      v-model:loading="loading"
      :src="src"
      :alt="text"
      :img-class="$style.image"
      lazy
      :fit="PicFit.cover"
    />
    <svg
      v-else
      :class="$style.text"
      viewBox="0 0 140 140"
    >

      <text
        x="50%"
        y="50%"
        transform="translate(0, 4.5)"
        dominant-baseline="middle"
        text-anchor="middle"

        fill="currentColor"
      >{{ text }}</text>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watchEffect } from "vue";
import { PicFit, UiPic } from "../Pic";
import { type AvatarProps, AvatarSize } from "./index";

const props = withDefaults(defineProps<AvatarProps>(), {
  size: 98 as AvatarSize,
});

const loading = ref(true);

watchEffect(() => {
  if (!props.src) {
    loading.value = false;
  }
});
</script>

<style lang="scss" module>
@import "../../../assets/utils";
.avatar {
  max-height: 100%;
  max-width: 100%;

  border-radius: 100%;

  transition: background-color .25s ease;
  box-shadow: 0 rem(4px) rem(14px) rgba(117, 0, 255, 0.15);
  &.border {
    background-image: linear-gradient(136.01deg, #5F00FF 17.98%, #BF00C0 69.81%, #FF008A 85.06%);
  }
  &.size-s98 {
    width: rem(98px);
    height: rem(98px);
    &.border {
      padding: rem(6px);
      position: relative;
      &:after {
        content: '';
        width: calc(100% - #{rem(6px)});
        height: calc(100% - #{rem(6px)});
      }
    }
  }
  &.size-s60 {
    width: rem(60px);
    height: rem(60px);
    &.border {
      padding: rem(4px);
      position: relative;
      &:after {
        content: '';
        width: calc(100% - #{rem(4px)});
        height: calc(100% - #{rem(4px)});
      }
    }
  }
  &.size-s22 {
    width: rem(22px);
    height: rem(22px);
  }
  &.size-s36 {
    width: rem(36px);
    height: rem(36px);
  }
  &.size-s46 {
    width: rem(46px);
    height: rem(46px);
  }
  &.size-s100 {
    width: rem(100px);
    height: rem(100px);
  }

  &.size-s160 {
    width: rem(160px);
    height: rem(160px);
  }

  &.size-s200 {
    width: rem(200px);
    height: rem(200px);
  }
  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    border-radius: 100%;
    background-color: #ffffff;
  }
}

.image {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.text {
  flex-grow: 1;
  width: 100%;
  display: block;

  color: #ffffff;

  transition: opacity .25s ease;

  font-weight: 700;
  font-size: rem(40px);
}
</style>
