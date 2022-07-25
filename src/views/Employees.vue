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
    <EmployeesTable :class="$style.table" />
  </UiContainer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import UiContainer from "../components/Ui/Container/Container.vue";
import UiBreadcrumbs from "../components/Ui/breadcrumbs/breadcrumbs.vue";
import EmployeesBest from "../components/Employees/EmployeesBest.vue";
import { BreadcrumbsItemProps } from "../components/Ui/Breadcrumbs";
import EmployeesTable from "../components/Employees/EmployeesTable.vue";

const breadcrumbs = ref<Array<BreadcrumbsItemProps>>(
  [{ title: "Home", to: "/" }, { title: "Employees", to: "/employees" }],
);

</script>

<style lang="scss" module>
@import "../assets/utils";
.employees {}
.breadcrumbs {
  margin-bottom: rem(28px);
}
.best {
  margin-bottom: rem(22px);
}
</style>
