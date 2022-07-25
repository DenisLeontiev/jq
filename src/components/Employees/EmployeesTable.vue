<template>
  <UiContainer :class="$style.employeesTable">
    <div :class="$style.header">
      <div :class="$style.title">Employees</div>
      <div :class="$style.button">Filter</div>
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
import { useEmployeesStore } from "../../stores";

const router = useRouter();
const name = "employeesMain";

const employeesStore = useEmployeesStore();
const bodyItems = computed(() => (
  employeesStore.getItems(name)
));

const goToUserPage = (event: MouseEvent) => {
  router.push({ path: "employees/testUser" });
};
</script>

<style lang="scss" module>
.employeesTable {}
</style>
