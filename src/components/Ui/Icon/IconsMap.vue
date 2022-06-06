<template>
  <component
    :is="component"
    v-for="[icon, component] in icons"
    :id="`icon-${icon}`"
    :key="icon"
  />
</template>

<script lang="ts" setup>
import { clearIconName } from "./index";

const icons = (Object.entries(
  import.meta.globEager<any>("./assets/**/*.svg"),
))
  .map(([key, value]) => ([
    clearIconName(key),
    value.default,
  ]));
</script>
