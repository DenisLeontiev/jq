<template>
  <div :class="$style.containerHeader">
    <div :class="$style.title" v-html="title" />
    <div :class="$style.content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>

<style lang="scss" module>
@import "../assets/utils";
.containerHeader {
  @extend %flex-start;
}
.title {
  font-weight: 700;
  font-size: rem(16px);
  line-height: rem(24px);
  color: #030307;
  margin-right: auto;
}
</style>
