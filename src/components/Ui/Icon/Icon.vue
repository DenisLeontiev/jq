<template>
  <div
    :class="[
      $style.icon,
      colored && $style.colored,
      custom && $style.custom,
      custom && $style[icon],
    ]"
  >
    <svg
      v-if="!custom"
      :class="$style.source"
    >
      <use :xlink:href="`#icon-${icon}`" />
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { type IconProps } from "./index";

const props = withDefaults(defineProps<IconProps>(), {

});

defineExpose(props);
</script>

<style lang="scss" module>
@import "../../../assets/utils";

.icon {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100%;
  pointer-events: none;
  position: relative;

  --icon-bg: transparent;
  &.custom {
    @extend %background-contain;
  }
  &.Chevrondown {
    background-image: url('../../../assets/svg/Chevrondown.svg');
  }
}

.bg {
  content: '';
  position: absolute;
  display: block;
  inset: rem(2px);
  background: var(--icon-bg);
  border-radius: rem(6px);
}

.source {
  fill: currentColor;
  position: relative;
  display: block;
  flex-grow: 1;
  width: 100%;
}
</style>
