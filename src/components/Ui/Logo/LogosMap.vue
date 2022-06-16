<template>
  <component
    :is="component"
    v-for="[icon, component] in icons"
    :id="`logo-${icon}`"
    :key="icon"
  />
</template>

<script lang="ts" setup>
import { clearLogoName } from "./index";

const icons = (Object.entries(
  import.meta.globEager<any>("./assets/*.svg"),
)).map(([key, value]) => ([
  clearLogoName(key),
  value.default,
]));
</script>
