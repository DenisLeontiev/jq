<template>
  <div :class="$style.breadcrumbs">
    <component
      v-for="(item, index) in items"
      :is="index === items.length - 1 ? 'span' : 'a'"
      :key="item.title"
      :href="item.href"
      :class="[$style.item, index === items.length - 1 && $style.active]"
    >
      {{ item.title }}
    </component>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { type BreadcrumbsProps } from "./index";

const props = withDefaults(defineProps<BreadcrumbsProps>(), {});

const { path } = useRoute();
</script>

<style lang="scss" module>
@import "../../../assets/utils";

.breadcrumbs {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: rem(-20px);
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
  &:hover {
    color: #545454;
  }
  &:not(:last-child) {
    margin-right: rem(20px);
  }

}
.active {
  user-select: none;
  cursor: default;
  color: #545454;
  pointer-events: none;
}
</style>
