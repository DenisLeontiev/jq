<template>
  <Field
    :disabled="disabled"
    :focused="focused"
    :label="label"
    error=""
    :required="required"
    size="medium"
    state="state"
    hint="hint"
    meta="meta"
    trigger-class="triggerClass"
    :as-label="false"
    @focus="onFocus($event, false)"
    :input-class="inputClass"
    :icon-class="inputClass"
    prepend-icon="Like"
    append-icon="Like"
    name="Test"
  >
    <input
      v-if="type === 'text'"
      ref="inputRef"
      v-model="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="$style.input"
      :type="type === 'password' ? (passwordVisible ? 'text' : 'password') : type"
      :inputmode="type === 'number' ? 'numeric' : undefined"
      :pattern="type === 'number' ? '[-+]?[0-9]*[.,]?[0-9]+' : undefined"
      :step="0.01"
      @focus="onFocus($event, true)"
      @blur="onBlur"
    >
    <textarea
      v-else
      ref="inputRef"
      v-model="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="[$style.input, $style.textarea]"
      :rows="rows"
      @focus="onFocus($event, true)"
      @blur="onBlur"
    />
    {{ value }}
  </Field>
</template>

<script lang="ts" setup>
import {
  computed, ref, toRef, watchEffect,
} from "vue";
import Field from "../Field/Field.vue";
import { type InputProps } from "./index";
import { useFormField } from "../Form";
import { useInputMask, useToggle } from "../../../common/src/hooks";
import { TypedFocusEvent } from "../../../common/src/types";

const props = withDefaults(defineProps<InputProps>(), {});

const emit = defineEmits<{
  (e: "update:modelValue", value: InputProps["modelValue"]): string;
  (e: "mounted", value: InputProps["modelValue"]): string;
}>();

const { value } = useFormField(toRef(props, "name"), { props, emit });

const [focused,,, { show, hide }] = useToggle();

const inputRef = ref<HTMLInputElement>();

const onFocus = (event: TypedFocusEvent, fromInput: boolean) => {
  if (props.disabled) {
    return;
  }
  if (!fromInput && inputRef.value) {
    inputRef.value.focus();
  }
  show();
};

const onBlur = () => {
  hide();
};

const isEmpty = computed(() => !value.value);

const passwordVisible = ref(false);

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};

useInputMask(
  inputRef,
  toRef(props, "mask"),
);

watchEffect(() => {
  if (!inputRef.value) {
    return;
  }
  if (props.autofocus) {
    inputRef.value.focus();
  }
});

</script>

<style lang="scss" module>
@import "../../../assets/utils";
.input {
  box-sizing: border-box;
  vertical-align: middle;
  outline: none;
  border: none;
  border-radius: 0;
  text-align: left;
  font-family: inherit;
  -webkit-appearance: none;

  &::-ms-clear {
    display: none;
  }

  @include placeholder-color('#B3BDC7');

  height: 52px;
  padding: 0 rem(16px);

  display: flex;
  align-items: center;

  border-bottom: 1px solid #EAEEF1;

  color: #030307;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
}
.textarea {
  height: rem(138px);
  padding: rem(8px) rem(20px);
}
</style>
