<template>
  <div :class="$style.select">
    <div :class="$style.label">
      All
    </div>
    <div :class="$style.icon" />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" module>
@import "../../assets/utils";
.select {
  @extend %flex-center;
  cursor: pointer;
}
.label {
  font-weight: 700;
  font-size: rem(14px);
  line-height: rem(24px);
  background: linear-gradient(136.01deg, #5F00FF 17.98%, #BF00C0 69.81%, #FF008A 85.06%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.icon {
  width: rem(24px);
  height: rem(24px);
  background-image: url('../../assets/svg/chevron-down.svg');
  @extend %background-contain;
  margin-left: rem(8px);
}
</style>
