<template>
  <div :class="$style.tableItemFeedback">
    <div :class="$style.list">
      <UiIcon
        v-for="(item, index) in items"
        :key="index"
        :icon="icons[index]"
        :class="[$style.icon, !item ? $style.gray : item > 3 ? $style.green : $style.red]"
      />
    </div>
    <UiIcon
      icon="Feedback"
      :class="[$style.icon, $style.feedback, isFeedback ? $style.blue : $style.gray]"
    />
    <div />
  </div>
</template>

<script lang="ts" setup>
import UiIcon from "../Icon/Icon.vue";
import { TableItemFeedbackProps } from "./index";

const icons = ["Kitchen", "Service", "Cleanliness", "Atmosphere"];

const props = withDefaults(defineProps<TableItemFeedbackProps>(), {});
</script>

<style lang="scss" module>
@import "../../../assets/utils";
.tableItemFeedback {
  @extend %flex-start;
}
.list {
  @extend %flex-start;
  margin-right: rem(28px);
}
.icon {
  width: rem(16px);
  height: rem(16px);
  &.red {
    color: #ED3F3F;
  }
  &.green {
    color: #11BB8D;
  }
  &.gray {
    color: #C6C6C6;
  }
  &.blue {
    color: #5F00FF;;
  }
  &:not(:last-child) {
    margin-right: rem(4px);
  }
}
</style>
