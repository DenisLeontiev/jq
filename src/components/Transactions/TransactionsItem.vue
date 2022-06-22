<template>
  <div :class="$style.item">
    <UiDoubleAvatar :class="$style.doubleWrapper" />
    <div :class="$style.content">
      <div :class="$style.title" />
      <div :class="$style.description" />
    </div>
    <div :class="$style.iconWrapper">
      <div :class="$style.icon" />
    </div>
    <div :class="$style.amount" />
  </div>
</template>

<script lang="ts" setup>
import UiDoubleAvatar from "../Ui/DoubleAvatar/DoubleAvatar.vue";
</script>

<style lang="scss" module>
@import "../../assets/utils";
.item {
  @extend %flex-start;
}
.doubleWrapper {
  margin-right: rem(32px);
}
.title {
  font-weight: 700;
  font-size: rem(14px);
  line-height: rem(20px);
  color: #030307;
}
.description {
  font-weight: 600;
  font-size: rem(12px);
  line-height: rem(16px);
  color: #C6C6C6;
}
</style>
