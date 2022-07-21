<template>
  <UiContainer
    variant="outside"
    :class="$style.employees"
  >
    <UiBreadcrumbs
      :items="breadcrumbs"
      :class="$style.breadcrumbs"
    />

    <UiContainer :class="[$style.cell, $style.head]" />
    <UiContainer :class="[$style.cell, $style.main]" />
  </UiContainer>
</template>

<script lang="ts" setup>
import UiContainer from "../components/Ui/Container/Container.vue";
import UiBreadcrumbs from "../components/Ui/breadcrumbs/breadcrumbs.vue";

</script>

<style lang="scss" module>
@import "../assets/utils";
.employees {}
.breadcrumbs {}
</style>
