<template>
  <div
    :class="[
      $style.icon,
      colored && $style.colored,
    ]"
  >
    <svg :class="$style.source">
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

  &.variant {
    padding: rem(4px);
    color: var(--color-White_1);
  }

  &:not(.colored) {
    .source {
      fill: currentColor;
    }
  }

  &.red {
    --icon-bg: var(--color-Red_3);
  }

  &.lightBlue {
    --icon-bg: #40C6FF;
  }

  &.yellow {
    --icon-bg: #FFAD4C;
  }

  &.violet {
    --icon-bg: #9730FF;
  }

  &.blue {
    --icon-bg: #4892F3;
  }

  &.green {
    --icon-bg: #3EAC5D;
  }

  &.black {
    --icon-bg: #202020;
  }

  &.pink {
    --icon-bg: var(--color-Pink_1);
  }

  &.blueGray {
    --icon-bg: var(--color-Blue_Gray_1);
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
  position: relative;
  display: block;
  flex-grow: 1;
  width: 100%;
}
</style>
