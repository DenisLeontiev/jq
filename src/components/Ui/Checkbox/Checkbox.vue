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
    <span :class="$style.icon">
      <Icon
        v-if="selected && ['checkbox', 'check'].includes(variant)"
        package="Outlined"
        icon="Check"
      />
    </span>
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
import { type CheckboxProps, CheckboxSize, CheckboxVariant } from "./index";
import Icon from "../Icon/Icon.vue";

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

}
</style>
