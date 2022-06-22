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
    <div :class="$style.list" />
  </UiContainer>
</template>

<script lang="ts" setup>
import UiContainer from "../Ui/Container/Container.vue";
import UiTagButton from "../Ui/TagButton/TagButton.vue";
import UiContainerHeader from "../Ui/ContainerHeader/ContainerHeader.vue";
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
</style>
