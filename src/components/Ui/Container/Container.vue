<template>
  <div :class="[$style.container, $style[variant]]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ContainerProps, ContainerVariant } from "./index";

withDefaults(
  defineProps<ContainerProps>(),
  {
    variant: "inside" as ContainerVariant,
  },
);
</script>

<style lang="scss" module>
@import "../../../assets/utils";
.container {
  &.inside {
    box-shadow: 0 rem(4px) rem(10px) rgba(0, 0, 0, 0.02);
    border-radius: rem(20px);
    background-color: #FFFFFF;
    padding: rem(20px);
  }
  &.outside {
    padding: rem(20px) rem(36px) rem(36px) rem(36px);
    background-color: #FAFAFA;
    border-radius: rem(25px);
    width: calc(100% - #{rem(36px)} * 2);
    margin: 0 auto;
  }
}
</style>
