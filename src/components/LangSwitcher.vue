<template>
  <UiSelect
    v-model="value"
    append-icon="Chevrondown"
    :options="options"
    :custom-icon="true"
    :class="$style.langSwitcher"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import UiSelect from "./Ui/Select/Select.vue";

const options = [
  "RU",
  "EN"];
const value = ref<string>(options[0]);
</script>

<style lang="scss" module>
@import "../assets/utils";
.langSwitcher {
}
</style>
