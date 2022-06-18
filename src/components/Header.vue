<template>
  <div :class="$style.header">
    <UiSelect
      v-model="value"
      append-icon="Cog"
      :options="options"
    />
    <UiIcon
      icon="Chevrondown"
      :custom="true"
      :class="$style.icon"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import UiSelect from "./Ui/Select/Select.vue";
import UiIcon from "./Ui/Icon/Icon.vue";

const options = [
  "All",
  "2",
  "3",
  "4"];
const value = ref<string>(options[0]);
</script>

<style lang="scss" module>
.header {}
.icon {
  width: 100px;
  height: 100px;
}
</style>
