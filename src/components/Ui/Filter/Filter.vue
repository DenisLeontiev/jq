<template>
  <div :class="$style.filter">
    <UiButton
      variant="filter"
      :class="$style.button"
      :append-icon="isOpen ? 'Chevronup' : 'Filter2'"
      @click="isOpen = !isOpen"
    >
      Filter
    </UiButton>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { type FilterProps } from "./index";
import UiButton from "../Button/Button.vue";

const props = withDefaults(defineProps<FilterProps>(), {});

const isOpen = ref(false);
</script>

<style lang="scss" module>
@import "../../../assets/utils";

.filter {
}
</style>
