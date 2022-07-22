<template>
  <UiContainer
    variant="outside"
    :class="$style.employees"
  >
    <UiBreadcrumbs
      :items="breadcrumbs"
      :class="$style.breadcrumbs"
    />

    <UiContainer :class="[$style.cell, $style.head]">
      <UiTable
        :head-items="headItems"
        :body-items="bodyItems"
      />
    </UiContainer>
    <UiContainer :class="[$style.cell, $style.main]" />
  </UiContainer>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import UiContainer from "../components/Ui/Container/Container.vue";
import UiBreadcrumbs from "../components/Ui/breadcrumbs/breadcrumbs.vue";
import UiTable from "../components/Ui/Table/Table.vue";
import { useEmployeesStore } from "../stores";

const employeesStore = useEmployeesStore();
const bodyItems = computed(() => (
  employeesStore.getItems
));
const headItems = computed(() => (
  Object.keys(bodyItems.value[0])
));

</script>

<style lang="scss" module>
@import "../assets/utils";
.employees {}
.breadcrumbs {}
</style>
