<template>
  <div :class="[$style.transactionsIcon, $style[variant]]">
    <UiIcon
      :icon="variant"
      :class="$style.icon"
    />
  </div>
</template>

<script lang="ts" setup>
import UiIcon from "../Icon/Icon.vue";
import { type TransactionsIconProps, transactionsIcons } from "./index";

withDefaults(
  defineProps<TransactionsIconProps>(),
  {
    variant: "Card" as transactionsIcons,
  },
);
</script>

<style lang="scss" module>
@import "../../../assets/utils";
.transactionsIcon {
  @extend %flex-center;
  width: rem(36px);
  height: rem(36px);
  border-radius: 50%;
  &.Card {
    background-color: #4CD964;
  }
  &.Moneybox {
    background-color: #5F00FF;
  }
}
.icon {
  width: rem(24px);
  height: rem(24px);
  color: white;
}
</style>
