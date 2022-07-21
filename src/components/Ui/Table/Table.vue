<template>
  <div :class="$style.table">
    <div :class="$style.thead">
      <div :class="$style.th" />
    </div>
    <div :class="$style.tbody">
      <div :class="$style.tr">
        <div :class="$style.td" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type TableProps } from "./index";

const props = withDefaults(defineProps<TableProps>(), {});
</script>

<style lang="scss" module>
@import "../../../assets/utils";
</style>
