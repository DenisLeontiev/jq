<template>
  <svg
    :class="[
      $style.loader,
      $style[size],
      spin && $style.spin
    ]"
    viewBox="0 0 249 249"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M124.5 37.1642C76.2658 37.1642 37.1642 76.2658 37.1642 124.5C37.1642 172.734 76.2658 211.836 124.5 211.836C172.734 211.836 211.836 172.734 211.836 124.5C211.836 76.2658 172.734 37.1642 124.5 37.1642ZM0 124.5C0 55.7405 55.7405 0 124.5 0C193.259 0 249 55.7405 249 124.5C249 193.259 193.259 249 124.5 249C55.7405 249 0 193.259 0 124.5Z"
      :class="$style.inner"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M126.358 37.1642C76.7917 37.1642 37.1642 76.5691 37.1642 124.5C37.1642 172.431 76.7917 211.836 126.358 211.836C136.621 211.836 144.94 220.155 144.94 230.418C144.94 240.681 136.621 249 126.358 249C56.8785 249 0 193.563 0 124.5C0 55.4372 56.8785 0 126.358 0C136.621 0 144.94 8.31948 144.94 18.5821C144.94 28.8447 136.621 37.1642 126.358 37.1642Z"
      :class="$style.outer"
    />
  </svg>
</template>

<script lang="ts" setup>
import { type LoaderProps, LoaderSize } from "./index";

const props = withDefaults(defineProps<LoaderProps>(), {
  spin: true,
  size: "large" as LoaderSize,
});
</script>

<style lang="scss" module>
@import "../../../assets/utils";

.loader {
  pointer-events: none;

  &.large {
    height: rem(92px);
  }

  &.medium {
    height: rem(48px);
  }

  &.small {
    height: rem(32px);
  }

  &.spin {
    @keyframes spin {
      0% {
        transform: none;
      }

      100% {
        transform: rotate(360deg);
      }
    }

    animation: spin 1s linear infinite;
  }
}

.inner {
  fill: #f0f0f0;
}

.outer {
  fill: #e2e2e2;
}
</style>
