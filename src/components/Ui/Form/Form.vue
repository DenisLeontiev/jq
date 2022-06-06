<template>
  <form
      :class="$style.root"
      @submit.prevent="onSubmit"
  >
    <slot />
  </form>
</template>

<script lang="ts" setup>
import { FormSubmitHandlerParams, useForm } from "@friendsonly/common";
import { toRef } from "vue";
import { type FormProps } from "./index";

const props = defineProps<FormProps>();

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
@import "../../assets/utils";

.root {

}
</style>
