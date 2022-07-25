<template>
  <UiContainer :class="$style.employeesTable">
    <div :class="$style.header">
      <div :class="$style.title">
        Employees
      </div>
      <UiFilter :class="$style.filter" />
    </div>
    <UiTable
      :is-sort="true"
      :body-items="bodyItems"
      :name="name"
      @click="goToUserPage"
    />
  </UiContainer>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import UiContainer from "../Ui/Container/Container.vue";
import UiTable from "../Ui/Table/Table.vue";
import UiFilter from "../Ui/Filter/Filter.vue";
import { useEmployeesStore } from "../../stores";

const router = useRouter();
const name = "employeesMain";
const type = "Main";

const employeesStore = useEmployeesStore();
const bodyItems = computed(() => (
  employeesStore.getItems(name, type)
));

const goToUserPage = (event: MouseEvent) => {
  router.push({ path: "employees/testUser" });
};
</script>

<style lang="scss" module>
@import "../../assets/utils";
.employeesTable {
}
.header {
  margin-bottom: rem(26px);

  @extend %flex-space-between;
}
.title {
  font-weight: 700;
  font-size: rem(16px);
  line-height: rem(24px);

  color: #030307;
}
</style>
