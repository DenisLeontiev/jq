<template>
  <UiContainer
    variant="outside"
    :class="$style.employees"
  >
    <UiBreadcrumbs
      :items="breadcrumbs"
      :class="$style.breadcrumbs"
    />
    <TransactionsTable :class="$style.table" />
  </UiContainer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import UiContainer from "../components/Ui/Container/Container.vue";
import UiBreadcrumbs from "../components/Ui/breadcrumbs/breadcrumbs.vue";
import { BreadcrumbsItemProps } from "../components/Ui/Breadcrumbs";
import TransactionsTable from "../components/Transactions/TransactionsTable.vue";

const breadcrumbs = ref<Array<BreadcrumbsItemProps>>(
  [{ title: "Home", to: "/" }, { title: "Transactions", to: "/transactions" }],
);

</script>

<style lang="scss" module>
@import "../assets/utils";
.employees {}
.breadcrumbs {
  margin-bottom: rem(20px);
}
</style>
