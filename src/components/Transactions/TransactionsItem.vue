<template>
  <div :class="$style.item">
    <UiDoubleAvatar
      :src-left="srcLeft"
      :text-left="textLeft"
      :src-right="srcRight"
      :text-right="textRight"
      :class="$style.doubleWrapper"
    />
    <div :class="$style.content">
      <div
        :class="$style.title"
        v-html="title"
      />
      <div
        :class="$style.description"
        v-html="description"
      />
    </div>
    <UiTransactionsIcon
      :class="$style.icon"
      :variant="TransactionsIconVariant.Card"
    />
    <div
      :class="[$style.amount, isSubzero && $style.subzero]"
      v-html="amount"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import UiDoubleAvatar from "../Ui/DoubleAvatar/DoubleAvatar.vue";
import UiTransactionsIcon from "../Ui/TransactionsIcon/TransactionsIcon.vue";
import { TransactionsIconVariant } from "../Ui/TransactionsIcon";

const props = defineProps<{
  srcLeft?: string;
  textLeft?: string;
  srcRight?: string;
  textRight?: string;
  title?: string;
  description?: string;
  amount?: string;
}>();

const isSubzero = computed(() => props.amount?.trim().indexOf("-") === 0);
</script>

<style lang="scss" module>
@import "../../assets/utils";
.item {
  @extend %flex-start;
}
.doubleWrapper {
  margin-right: rem(32px);
}
.content {
  margin-right: auto;
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
.amount {
  margin-left: rem(40px);
  width: rem(102px);
  text-align: right;
  font-weight: 700;
  font-size: rem(14px);
  line-height: rem(17px);
  color: #030307;
  &.subzero {
    color: #ED3F3F;
  }
}
</style>
