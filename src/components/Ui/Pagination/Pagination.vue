<template>
  <div :class="$style.pagination">
    <div :class="$style.list">
      <div :class="$style.item" />
    </div>
    <div :class="$style.nav">
      <div :class="[$style.arrow, $style.left]" />
      <div :class="[$style.arrow, $style.right]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type PaginationProps } from "./index";

const props = withDefaults(defineProps<PaginationProps>(), {});
</script>

<style lang="scss" module>
@import "../../../assets/utils";

.pagination {}
.list {}
.item {}

</style>
