<template>
  <div :class="$style.breadcrumbs">
    <component
      :is="isLast(index) ? 'span' : 'router-link'"
      v-for="(item, index) in items"
      :key="item.title"
      :to="item.to"
      :class="[$style.item, isLast(index) && $style.active]"
    >
      {{ item.title }}
      <UiIcon
        v-if="!isLast(index)"
        icon="Chevronright"
        :class="$style.arrow"
      />
    </component>
  </div>
</template>

<script lang="ts" setup>
import { type BreadcrumbsProps } from "./index";
import UiIcon from "../Icon/Icon.vue";

const props = withDefaults(defineProps<BreadcrumbsProps>(), {});

function isLast(index:number) {
  return index === props.items.length - 1;
}
</script>

<style lang="scss" module>
@import "../../../assets/utils";

.breadcrumbs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.item {
  display: inline-flex;
  align-items: center;
  color: #C6C6C6;
  font-weight: 400;
  font-size: rem(10px);
  line-height: rem(12px);
  cursor: pointer;
  user-select: none;
  &:hover {
    color: #545454;
  }
  &:not(:last-child) {
    margin-right: rem(8px);
  }
}
.arrow {
  width: rem(4px);
  height: rem(6px);
  margin-left: rem(8px);
  color: #C6C6C6;
}
.active {
  color: #545454;
  pointer-events: none;
}
</style>
