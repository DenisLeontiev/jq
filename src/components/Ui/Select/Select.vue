<template>
  <Field
    v-bind="{...props, ...$attrs}"
    :display-value="modelValue"
    :empty="!modelValue?.length"
    :focused="focused"
    :class="[
      $style.field,
      disabled && $style.disabled,
      focused && $style.focused,
    ]"
    @click="focus"
    @mounted="setFieldRef"
  >
    <div
      ref="triggerRef"
      tabindex="0"
      @focus="onFocus"
      @blur="onTargetBlur"
    >
      <span
        v-if="!isEmpty"
        :class="$style.value"
      >
        {{ displayValue }}
      </span>
    </div>
    <Teleport
      v-if="focused"
      :to="teleportContainer"
      :disabled="!teleportContainer"
    >
      <div
        ref="dropdownRef"
        :class="[
          $style.dropdown
        ]"
      >
        <div :class="$style.options">
          <DropdownItem
            v-for="option in computedOptions"
            :key="option.value"
            :class="$style.option"
            tabindex="0"
            @click="onChange(option)"
          >
            {{ option.label }}
          </DropdownItem>
        </div>
      </div>
    </Teleport>
  </Field>
</template>

<script lang="ts">
import {
  defineComponent, ref, computed,
  toRef,
} from "vue";

export default defineComponent({
  inheritAttrs: false,
});
</script>

<script lang="ts" setup>
import {
  useFocus, arrayFrom, useTeleport, useOutsideClick, usePopup,
} from "../../../common";
import Field from "../Field/Field.vue";
import { type SelectProps } from "./index";
import DropdownItem from "../DropdownItem/DropdownItem.vue";

const props = withDefaults(
  defineProps<SelectProps>(),
  {
    displayField: "label",
    valueField: "value",
    asPopup: false,
  },
);

const emit = defineEmits<{
  (e: "update:modelValue", value: any | Array<any>): void
}>();

const triggerRef = ref<HTMLDivElement>();

const isEmpty = computed(() => (
  [null, undefined].includes(props.modelValue)
));

type SelectOption = {
  value: any,
  label: any,
  source: any,
  selected: boolean
}

const computedOptions = computed<Array<SelectOption>>(() => {
  const computedValue = arrayFrom(props.modelValue);
  return (
      (props.options || []).map((option) => {
        const source = typeof option === "string" ? {
          [props.displayField]: option,
          [props.valueField]: option,
        } : option;

        return {
          value: source[props.valueField],
          label: source[props.displayField],
          source,
          selected: computedValue.includes(source[props.valueField]),
        };
      })
  ) as Array<SelectOption>;
});

const displayValue = computed(() => (
  arrayFrom(props.modelValue).reduce((acc, cur) => {
    const found = computedOptions.value.find(({ value }) => value === cur);
    if (found) {
      acc.push(found.label);
    }
    return acc;
  }, []).join(", ")
));

const {
  focused,
  focus,
  onFocus,
  onBlur,
} = useFocus(false, triggerRef);

const onChange = (option: SelectOption) => {
  if (props.modelValue instanceof Array) {
    const newValue = [...props.modelValue];
    const index = newValue.indexOf(option.value);
    if (index === -1) {
      newValue.push(option.value);
    } else {
      newValue.splice(index, 1);
    }
    emit("update:modelValue", newValue);
  } else {
    emit("update:modelValue", option.value);
    requestAnimationFrame(onBlur);
  }
};

const teleportContainer = useTeleport();

const dropdownRef = ref<HTMLElement>();

const onTargetBlur = (event: FocusEvent) => {
  if (
    event.relatedTarget === dropdownRef.value
      || dropdownRef.value?.contains(event.relatedTarget as HTMLElement)
  ) {
    return;
  }
  onBlur();
};

const fieldRef = ref<HTMLElement>();
const setFieldRef = (field: HTMLElement | undefined) => {
  fieldRef.value = field;
};

const { popupBounds } = usePopup(
  fieldRef,
  dropdownRef,
  {
    offset: 10,
    flag: toRef(props, "asPopup"),
  },
);

useOutsideClick({
  handler(e) {
    if (
      e.target === dropdownRef.value
        || dropdownRef.value?.contains(e.target as HTMLElement)
        || e.target === fieldRef.value
        || fieldRef.value?.contains(e.target as HTMLElement)
    ) {
      return;
    }
    requestAnimationFrame(onBlur);
  },
});
</script>

<style lang="scss" module>
@import "../../../assets/utils";

.field {
  &:not(.disabled) {
    cursor: pointer;
  }
}

.value {
  font-weight: 700;
  font-size: rem(14px);
  line-height: rem(24px);
  background: linear-gradient(136.01deg, #5F00FF 17.98%, #BF00C0 69.81%, #FF008A 85.06%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.dropdown {
  max-height: rem(300px);
  overflow-y: auto;

  display: flex;
  flex-direction: column;

  box-shadow: inset 0 0 0 rem(2px) var(--color-Secondary_Gray_8);
  background: var(--color-White_1);

  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  border-bottom-right-radius: rem(10px);
  border-bottom-left-radius: rem(10px);
}

.options {
  display: flex;
  flex-direction: column;
}

.option {
  --item-x-padding: #{rem(20px)};
  --bg: transparent;
  color: var(--color-Text_Light_Primary);
}
</style>
