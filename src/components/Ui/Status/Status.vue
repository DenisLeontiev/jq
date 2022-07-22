<template>
  <div :class="[$style.status, $style.variant]">
    <UiIcon
      :icon="variant"
      :class="$style.icon"
    />
  </div>
</template>

<script lang="ts" setup>
import { type StatusProps } from "./index";

const props = withDefaults(defineProps<StatusProps>(), {});
import UiIcon from "../Icon/Icon.vue";
</script>

<style lang="scss" module>
@import "../../../assets/utils";

.status {
  width: rem(23px);
  height: rem(23px);
  border-radius: 50%;
  background-color: white;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}
</style>
