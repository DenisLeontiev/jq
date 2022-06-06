<template>
  <button
    type="button"
    :class="[
      $style.root,
      $style[variant],
      $style[`s${size}`],
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
import { useField } from "@friendsonly/common";
import { type CheckboxProps, CheckboxSize, CheckboxVariant } from "./index";
import Icon from "../Icon/Icon.vue";

const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: false,
  trueValue: true,
  falseValue: false,
  variant: "checkbox" as CheckboxVariant,
  size: 24 as CheckboxSize,
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
@import "../../assets/utils";

.root {
  display: flex;
  align-items: center;
  width: 100%;

  &.s24 {
    &.checkbox,
    &.check {
      .icon {
        height: rem(24px);
        width: rem(24px);
        padding: rem(4px);
      }
    }
    &.checkbox {
      .icon {
        border-radius: rem(4px);
      }
    }

    .label {
      @include typography_Body_M;
    }
  }

  &.s20 {
    &.checkbox,
    &.check {
      .icon {
        height: rem(20px);
        width: rem(20px);
        padding: rem(4px);
      }
    }
    &.checkbox {
      .icon {
        border-radius: rem(4px);
      }
    }

    .label {
      @include typography_Body_M;
    }
  }

  &.s12 {
    &.checkbox,
    &.check {
      .icon {
        height: rem(12px);
        width: rem(12px);
        padding: rem(2px);
      }
    }
    &.checkbox {
      .icon {
        border-radius: rem(2px);
      }
    }

    .label {
      @include typography_Body_S;
    }
  }

  &.checkbox,
  &.check {
    --box-shadow: var(--color-Primary_Blue_1);
    --background: transparent;
    --color: var(--color-White_1);

    .icon {
      box-shadow: inset 0 0 0 rem(1px) var(--box-shadow);
      background: var(--background);
      color: var(--color);
    }

    &:not(.disabled) {
      &:hover,
      &:focus {
        --box-shadow: var(--color-Primary_Blue_2);
      }

      &:active {
        .icon {
          box-shadow: inset 0 0 0 rem(1px) var(--color-Primary_Blue_2),
          0 0 0 rem(2px) var(--color-Primary_Blue_3);
        }
      }

      &.selected {
        --background: var(--color-Primary_Blue_1);
      }
    }

    &.disabled {
      --background: var(--color-Secondary_Gray_8);
      --box-shadow: var(--color-Secondary_Gray_8);
      --color: var(--color-Secondary_Gray_7);
    }
  }

  &.check {
    .icon {
      border-radius: 100%;
    }
  }

  &.radio {
    --box-shadow: var(--color-Primary_Blue_1);
    --background: var(--color-White_1);
    --color: var(--color-White_1);

    .icon {
      box-shadow: inset 0 0 0 rem(1px) var(--box-shadow);
      background: var(--background);
      color: var(--color);
      border-radius: 100%;

      position: relative;

      padding: rem(7px);

      &:before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        border-radius: 100%;
        opacity: 0;
        background: var(--color);
      }
    }

    &:not(.disabled) {
      &:hover,
      &:focus {
        --box-shadow: var(--color-Primary_Blue_2);
      }

      &:active {
        .icon {
          box-shadow: inset 0 0 0 rem(1px) var(--color-Primary_Blue_2),
          0 0 0 rem(2px) var(--color-Primary_Blue_3);
        }
      }

      &.selected {
        --color: var(--color-Primary_Blue_1);
      }
    }

    &.disabled {
      --box-shadow: var(--color-Secondary_Gray_8);
      --color: var(--color-Secondary_Gray_7);

      &.selected {
        --background: var(--color-Secondary_Gray_8);
      }

      &:not(.selected) {
        --background: var(--color-Secondary_Gray_7);
        --box-shadow: var(--color-Secondary_Gray_7);
      }
    }

    &.selected {
      .icon {
        &:before {
          opacity: 1;
        }
      }
    }
  }

  &.switch {
    --box-shadow: var(--color-Secondary_Gray_8);
    --background: var(--color-Secondary_Gray_8);
    --color: var(--color-Secondary_Gray_7);

    .icon {
      width: rem(48px);
      height: rem(24px);
      border-radius: rem(12px);

      position: relative;

      background: var(--background);
      box-shadow: inset 0 0 0 rem(1px) var(--box-shadow);

      &:before {
        content: '';
        display: block;
        position: absolute;
        top: rem(4px);
        bottom: rem(4px);
        background: var(--color);
        border-radius: 100%;
      }
    }

    &:not(.disabled) {
      --color: var(--color-Primary_Blue_1);

      &:focus,
      &:hover {
        --box-shadow: var(--color-Primary_Blue_3);
      }

      &:not(.selected) {
        --color: var(--color-Secondary_Gray_7);
      }
    }

    &.disabled {
      --color: var(--color-White_1);
    }

    &.selected {
      .icon {
        &:before {
          left: rem(28px);
          right: rem(4px);
        }
      }
    }

    &:not(.selected) {
      .icon {
        &:before {
          right: rem(28px);
          left: rem(4px);
        }
      }
    }
  }

  &:not(.disabled) {
    cursor: pointer;
  }

  &:not(.reverse) {
    .label {
      margin-left: rem(10px);
    }
  }

  &.reverse {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
}

.label {
  color: var(--color-Text_Light_Primary);
}
</style>
