<template>
  <button
    type="button"
    :class="[
      $style.root,
      $style[variant],
      disabled && $style.disabled,
      selected && $style.selected,
      reverse && $style.reverse,
    ]"
    :tabindex="0"
    @click="toggle"
  >
    <pre />
    <span
      v-if="label && 'label' in $slots"
      :class="$style.label"
    >
      <slot
        name="label"
        :selected="selected"
      >
        {{ label }}
      </slot>
    </span>
  </button>
</template>

<script lang="ts" setup>
import {
  computed, toRef,
} from "vue";
import { useField } from "../../../common/src/hooks/useForm";
import { type CheckboxProps, CheckboxVariant } from "./index";

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  trueValue: true,
  falseValue: false,
  variant: "checkbox" as CheckboxVariant,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: CheckboxProps["modelValue"]): void;
}>();

const { value, setValue } = useField(
  props,
  toRef(props, "name"),
  "modelValue",
  emit,
);

const selected = computed(() => (
  value.value === props.trueValue
));

const toggle = () => {
  if (props.disabled) {
    return;
  }

  setValue(selected.value ? props.falseValue : props.trueValue);
};
</script>

<style lang="scss" module>
@import "../../../assets/utils";

.root {
    display: inline-flex;
    align-items: flex-start;
    cursor: pointer;

    pre {
        flex-shrink: 0;
        margin-right: 12px;
        transition: all 200ms ease-in-out, border-width 0ms linear;
    }
}

.label {
    margin-top: rem(3px);
}

.checkbox {
    
    pre {
        width: 24px;
        height: 24px;
        border-radius: rem(4px);
        border: 1px solid var(--lilac);
    }

    &:hover {

        pre {
            border-width: 2px;
        }
    }

}
    .selected {

        pre {
            background-color: var(--lilac);
        }
    }
</style>
