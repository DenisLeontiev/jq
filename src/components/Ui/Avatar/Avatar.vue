<template>
  <div
    :class="[
      $style.avatar,
      hasError && $style.hasError,
      $style[`color-c${color}`],
      $style[`size-s${size}`]
    ]"
  >
    <UiPic
      v-if="!!src || !hasError"
      v-model:loading="loading"
      v-model:has-error="hasError"
      :src="src"
      :alt="username"
      :img-class="$style.image"
      lazy
      :fit="PicFit.cover"
    />
    <svg
      :class="$style.firstLetter"
      viewBox="0 0 140 140"
    >
      <template v-if="icon">
        <foreignObject
          x="44"
          y="44"
          width="56"
          height="56"
        >
          <UiIcon
            :icon="icon"
            :package="null"
          />
        </foreignObject>
      </template>
      <template v-else>
        <text
          font-weight="600"
          font-size="48px"
          font-family="Inter"

          x="50%"
          y="50%"
          transform="translate(0, 4.5)"
          dominant-baseline="middle"
          text-anchor="middle"

          fill="currentColor"
        >{{ firstLetter }}</text>
      </template>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watchEffect } from "vue";
import { PicFit, UiPic } from "../Pic";
import { type AvatarProps, AvatarSize } from "./index";
import { UiIcon } from "../Icon";

const props = withDefaults(defineProps<AvatarProps>(), {
  userId: 0,
  size: 100 as AvatarSize,
});

const firstLetter = computed(() => props.username?.[0]?.toUpperCase() || "");

const color = computed(() => 'red');

const hasError = ref(false);
const loading = ref(true);

watchEffect(() => {
  if (!props.src) {
    hasError.value = true;
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
  overflow: hidden;

  transition: background-color .25s ease;

  @include avatarSizes();

  &.hasError {
    @include avatarColors(background-color);
  }

  &:not(.hasError) {
    .firstLetter {
      opacity: 0;
    }
  }
}

.image {
  width: 100%;
  height: 100%;
}

.firstLetter {
  flex-grow: 1;
  width: 100%;
  display: block;

  color: var(--color-White_1);

  transition: opacity .25s ease;
}
</style>
