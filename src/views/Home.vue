<template>
  <UiContainer
    variant="outside"
    :class="$style.container"
  >
    <UiBreadcrumbs :items="breadcrumbs" :class="$style.breadcrumbs" />
    <Restaurants :class="[$style.cell, $style.topLeft]" />
    <Transactions :class="[$style.cell, $style.topRight]" />
    <UiContainer :class="[$style.cell, $style.bottom]">
      3
    </UiContainer>
  </UiContainer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import UiContainer from "../components/Ui/Container/Container.vue";
import UiBreadcrumbs from "../components/Ui/breadcrumbs/breadcrumbs.vue";
import { BreadcrumbsItemProps } from "../components/Ui/Breadcrumbs";
import Restaurants from "../components/Restaurants/Restaurants.vue";
import Transactions from "../components/Transactions/Transactions.vue";

const breadcrumbs = ref<Array<BreadcrumbsItemProps>>(
  [{ title: "Главная", to: "/" }],
);
</script>

<style lang="scss" module>
@import "../assets/utils";
.container {
  display: grid;
  grid-template-areas: "breadcrumbs breadcrumbs"
                       "topLeft topRight"
                       "bottom bottom";
  gap: rem(40px);
}
.breadcrumbs {
  grid-area: breadcrumbs;
}
.cell {
  &.topLeft {
    grid-area: topLeft;
  }
  &.topRight {
    grid-area: topRight;
  }
  &.bottom {
    grid-area: bottom;
  }
}
</style>
