<template>
  <div
      :class="[
      $style.root,
      disabled && $style.disabled,
      required && $style.required,
      hasError && $style.hasError,
      focused && $style.focused,
      processing && $style.processing,
      empty && $style.empty,
      touched && $style.touched,
      prependIcon && $style.hasPrependIcon
    ]"
  >
    <div :class="$style.container">
      <div
          v-if="prependIcon || 'prepend' in $slots"
          :class="$style.prepend"
      >
        <slot
            name="prepend"
            :icon-name="$style.icon"
        >
          <Icon
              :package="null"
              :icon="prependIcon"
              :class="$style.icon"
          />
        </slot>
      </div>
      <div
          v-if="content || 'default' in $slots"
          :class="$style.content"
      >
        <slot>
          <div :class="$style.label">
            <span :class="$style.labelContent">{{ label }}</span>
          </div>
          <div
              v-if="suffix"
              :class="$style.suffix"
          >
            <span>{{ suffix }}</span>
          </div>
          <div
              v-if="postfix"
              :class="$style.postfix"
          >
            <span><span
                :class="$style.displayValue"
            >{{ displayValue || '' }}</span>{{ postfix }}</span>
          </div>
          <span
              v-if="!empty"
              :class="$style.value"
          >{{ content }}</span>
        </slot>
      </div>
      <div
          v-if="appendIcon || 'append' in $slots"
          :class="$style.append"
      >
        <slot
            name="append"
            :icon-name="$style.icon"
        >
          <Icon
              :package="null"
              :icon="appendIcon"
              :class="$style.icon"
          />
        </slot>
      </div>
    </div>
    <div
        v-if="meta"
        :class="$style.footer"
    >
      <div :class="$style.meta">
        {{ meta }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useField, useFocus } from "../../../common";
import { computed, toRef } from "vue";
import { type FieldProps } from "./index";
import Icon from "../Icon/Icon.vue";

const props = withDefaults(defineProps<FieldProps>(), {});

const emit = defineEmits<{
  (event: "update:focused", value: boolean): void
}>();

const {
  touched,
  error,
} = useField(props, toRef(props, "name"));

const hasError = computed(() => !!error.value.length);

const {
  focused,
  onFocus,
  onBlur,
} = useFocus();
</script>

<style lang="scss" module>
@import "../../../assets/utils";

.root {
  --box-shadow: var(--color-Secondary_Gray_8);
  --background: var(--color-White_1);
  --color: var(--color-Text_Light_Secondary);
  --label: var(--color-Text_Light_Secondary);

  &:not(.disabled) {
    &:hover {
      --box-shadow: var(--color-Secondary_Gray_7);
    }

    &:not(.empty) {
      --color: var(--color-Text_Light_Primary);
      --left: var(--color-Text_Light_Secondary);
    }

    &.touched {
      &.hasError {
        --box-shadow: var(--color-Red_1);
        --label: var(--color-Red_1);
      }

      &.valid {
        --box-shadow: var(--color-Primary_Blue_1);
        --label: var(--color-Primary_Blue_1);
      }
    }

    &.processing {
      --label: var(--color-Secondary_Gray_4);
    }

    &.required {
      --box-shadow: var(--color-Secondary_Gray_4);
      --label: var(--color-Secondary_Gray_4);

      .labelContent {
        &::after {
          content: ' *';
        }
      }
    }

    &.focused {
      --box-shadow: var(--color-Primary_Blue_3);
      --label: var(--color-Primary_Blue_3);
    }
  }

  &.disabled {
    --box-shadow: var(--color-Secondary_Gray_8);
    --background: var(--color-Secondary_Gray_8);
    --label: var(--color-Text_Light_Secondary);
  }

  &:not(.empty) {
    .label {
      height: 0;
      //@include typography_Body_xs;
      transform: translateY(rem(-26px)) translateX(rem(-4px));
    }

    &.hasPrependIcon {
      .label {
        transform: translateY(rem(-26px)) translateX(rem(-4px - 12px - 16px));
      }
    }
  }
}

.container {
  position: relative;

  display: flex;
  align-items: center;

  box-shadow: inset 0 0 0 rem(2px) var(--box-shadow);
  background: var(--background);

  border-radius: rem(10px);
  padding: rem(18px) rem(20px);
}

.icon {
  height: rem(16px);
  width: rem(16px);
  color: var(--color-Text_Light_Secondary);
}

.prepend + *,
.content + * {
  margin-left: rem(12px);
}

.content {
  flex-grow: 1;
  width: 0;
  //@include typography_Body_S;
  color: var(--color);

  display: flex;
}

.label {
  pointer-events: none;
  width: 0;

  transition: .25s ease;
  transition-property: transform, font-size, line-height, padding, height;

  color: var(--label);
}

.labelContent {
  background: var(--background);
  display: block;
  inline-size: max-content;
  padding: 0 rem(4px);
  border-radius: rem(4px) rem(4px) 0 0;
}

.suffix,
.postfix {
  pointer-events: none;
  //@include typography_Body_S;
  color: var(--color);
  white-space: nowrap;
}

.postfix {
  width: 0;
  height: 0;

  .displayValue {
    opacity: 0;
  }
}

.footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: rem(8px);
}

.meta {
  //@include typography_Body_xs;
  color: var(--label);
}
</style>
