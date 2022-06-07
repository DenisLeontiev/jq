<template>
  <div :class="$style.breadcrumbs">
    <a
      v-for="item in items"
      :key="item.title"
      :href="item.href"
      :class="[$style.item, item.href === path && $style.active]"
    >
      {{ item.title }}
    </a>
  </div>
</template>

<script lang="ts" setup>
import { type BreadcrumbsProps } from "./index";

const props = withDefaults(defineProps<BreadcrumbsProps>(), {});
</script>

<style lang="scss" module>
@import "../../../assets/utils";

.breadcrumbs {
  display: flex;
}
.item {
  color: #C6C6C6;
  font-weight: 400;
  font-size: rem(10px);
  line-height: rem(12px);
  cursor: pointer;
  &:hover {
    color: #545454;
  }
  &.active {
    color: #545454;
    pointer-events: none;
  }
  &:not(:last-child) {
    margin-right: rem(20px);
  }
}
</style>
