<template>
  <div :class="[$style.tableSort, $style[sort]]">
    <UiIcon
      icon="Triangletop"
      :class="[$style.icon, $style.top]"
    />
    <UiIcon
      icon="Trianglebottom"
      :class="[$style.icon, $style.bottom]"
    />
  </div>
</template>

<script lang="ts" setup>
import UiIcon from "../Icon/Icon.vue";
import { TableSortProps } from "./index";

const props = withDefaults(defineProps<TableSortProps>(), {});
</script>

<style lang="scss" module>
@import "../../../assets/utils";
.tableSort {
  color: #BDC6CF;
  &.up {
    .top {
      color: red;
    }
  }
  &.down {
    .bottom {
      color: red;
    }
  }
}
.icon {
  width: rem(8px);
  height: rem(8px);
}
</style>
