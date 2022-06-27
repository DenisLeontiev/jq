<template>
  <UiContainer :class="$style.restaurants">
    <UiContainerHeader
      :class="$style.header"
      title="Транзакции"
    >
      <div :class="$style.row">
        За неделю
        <div :class="$style.tagList">
          <UiTagButton
            :class="$style.tag"
            label="Последние"
          />
          <UiTagButton
            :class="$style.tag"
            label="Все"
          />
        </div>
      </div>
    </UiContainerHeader>
    <div :class="$style.group">
      <div :class="$style.title">Сегодня</div>
      <div :class="$style.list">
        <TransactionsItem
          :class="$style.item"
          src-left="https://picsum.photos/400/400"
          text-right="R"
          title="Чаевые"
          description="На карту * 2356"
          amount="-50 AED"
        />
        <TransactionsItem
          :class="$style.item"
          src-left="https://picsum.photos/400/400"
          text-right="R"
          title="Чаевые"
          description="На карту * 2356"
          amount="50 AED"
        />
      </div>
    </div>
    <div :class="$style.group">
      <div :class="$style.title">Сегодня</div>
      <div :class="$style.list">
        <TransactionsItem
          :class="$style.item"
          src-left="https://picsum.photos/400/400"
          text-right="R"
          title="Чаевые"
          description="На карту * 2356"
          amount="-50 AED"
        />
        <TransactionsItem
          :class="$style.item"
          src-left="https://picsum.photos/400/400"
          text-right="R"
          title="Чаевые"
          description="На карту * 2356"
          amount="50 AED"
        />
      </div>
    </div>
  </UiContainer>
</template>

<script lang="ts" setup>
import UiContainer from "../Ui/Container/Container.vue";
import UiTagButton from "../Ui/TagButton/TagButton.vue";
import UiContainerHeader from "../Ui/ContainerHeader/ContainerHeader.vue";
import TransactionsItem from "./TransactionsItem.vue";
</script>

<style lang="scss" module>
@import "../../assets/utils";
.transactions {}
.tagList {
  margin-left: rem(16px);
  @extend %flex-start;
}
.row {
  @extend %flex-start;
}
.tag {
  &:not(:last-child) {
    margin-right: rem(16px);
  }
}
.group {
  margin-top: rem(20px);
}
.title {
  margin-bottom: rem(20px);
  text-align: center;
  font-weight: 700;
  font-size: rem(10px);
  line-height: rem(12px);
  color: #030307;
}
.item {
  &:not(:last-child) {
    margin-bottom: rem(16px);
  }
}
</style>
