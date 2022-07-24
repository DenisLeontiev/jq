<template>
  <UiContainer
    variant="outside"
    :class="$style.employees"
  >
    <UiBreadcrumbs
      :items="breadcrumbs"
      :class="$style.breadcrumbs"
    />
    <EmployeesBest :class="$style.best" />

    <UiContainer :class="[$style.content]">
      <UiTable
        :is-sort="true"
        :body-items="bodyItems"
        :name="name"
      />
    </UiContainer>
  </UiContainer>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import UiContainer from "../components/Ui/Container/Container.vue";
import UiBreadcrumbs from "../components/Ui/breadcrumbs/breadcrumbs.vue";
import UiTable from "../components/Ui/Table/Table.vue";
import { useEmployeesStore } from "../stores";
import EmployeesBest from "../components/Employees/EmployeesBest.vue";

const name = "employeesMain";

const employeesStore = useEmployeesStore();
const bodyItems = computed(() => (
  employeesStore.getItems(name)
));

</script>

<style lang="scss" module>
@import "../assets/utils";
.employees {}
.breadcrumbs {}
.best {
  margin-bottom: rem(22px);
}
</style>
