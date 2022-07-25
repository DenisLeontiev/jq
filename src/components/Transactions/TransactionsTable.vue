<template>
  <UiContainer :class="$style.transactionsTable">
    <div :class="$style.header">
      <div :class="$style.title">
        Transactions
      </div>
      <UiFilter :class="$style.filter" />
    </div>
    <UiTable
      :is-sort="true"
      :body-items="bodyItems"
      :name="name"
      @click="goToUserPage"
    />
    <UiPagination
      :count="5"
      :current="current"
      variant="regular"
      :class="$style.pagination"
      @setCurrent="setCurrent"
    />
  </UiContainer>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import UiContainer from "../Ui/Container/Container.vue";
import UiTable from "../Ui/Table/Table.vue";
import UiFilter from "../Ui/Filter/Filter.vue";
import UiPagination from "../Ui/Pagination/Pagination.vue";
import { useTransactionsStore } from "../../stores";

const name = "transactionsMain";
const type = "Main";

const transactionsStore = useTransactionsStore();
const bodyItems = computed(() => (
  transactionsStore.getItems(name, type)
));

const goToUserPage = (event: MouseEvent) => {
  console.log("click");
};

const current = ref<number>(1);
const setCurrent = (value: number) => {
  current.value = value;
};
</script>

<style lang="scss" module>
@import "../../assets/utils";
.transactionsTable {
}
.header {
  margin-bottom: rem(22px);

  @extend %flex-space-between;
}
.title {
  font-weight: 700;
  font-size: rem(16px);
  line-height: rem(24px);

  color: #030307;
}
.pagination {
  margin-top: rem(4px);
}
</style>
