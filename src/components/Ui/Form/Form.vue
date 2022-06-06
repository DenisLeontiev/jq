<template>
  <form
      :class="$style.root"
      @submit.prevent="onSubmit"
  >
    <slot />
  </form>
</template>

<script lang="ts" setup>
import { FormSubmitHandlerParams, useForm } from "../../../common";
import { toRef } from "vue";
import { FormProps } from "./index";

const props = withDefaults(defineProps<FormProps<any>>(), {});

const emit = defineEmits<{
  (e: "submit", params: FormSubmitHandlerParams): void
}>();

const {
  onSubmit,
} = useForm(toRef(props, "modelValue"), {
  submitHandler(params: FormSubmitHandlerParams<any>) {
    emit("submit", params);
  },
});
</script>

<style lang="scss" module>
@import "../../../assets/utils";

.root {

}
</style>
