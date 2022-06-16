<template>
  <svg :class="$style.source">
    <use :xlink:href="`#logo-${variant}`" />
  </svg>
</template>

<script lang="ts" setup>
import { type LogoProps, LogoVariant } from "./index";

withDefaults(
  defineProps<LogoProps>(),
  {
    variant: "main" as LogoVariant,
  },
);

</script>

<style lang="scss" module>
.source {
  max-height: 100%;
  max-width: 100%;
  display: block;
  pointer-events: none;
}
</style>
