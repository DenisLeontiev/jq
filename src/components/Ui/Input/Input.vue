<template>
    <Field
        :disabled="disabled"
        :focused="focused"
        @focus="onFocus($event, false)"
        :label="label"
        error=""
        :required="required"
        size="medium"
        state="state"
        hint="hint"
        meta="meta"
        triggerClass="triggerClass"
        :asLabel="false"
        :inputClass="inputClass"
        :iconClass="inputClass"
        prependIcon="Like"
        appendIcon="Like"
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
        />
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
    </Field>
</template>

<script lang="ts" setup>
import { computed, defineComponent, ref, toRef, watchEffect } from 'vue';
import Field from '../Field/Field.vue';
import { type InputProps } from './index';
import { useFormField } from "../Form";
import { useInputMask, useToggle } from "../../../common/src/hooks";
import { TypedFocusEvent } from "../../../common/src/types";

const props = withDefaults(defineProps<InputProps>(), {});

const emit = defineEmits<{
  (e: "update:modelValue", value: InputProps["modelValue"]): void;
  (e: "mounted", value: InputProps["modelValue"]): void;
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
  display: block;
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

  height: 52px;
  display: flex;
  align-items: center;
  background-color: #3EAC5D;
}
.textarea {
  height: rem(138px);
  padding: rem(8px) rem(20px);
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #030307;
}
</style>
