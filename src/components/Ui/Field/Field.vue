<template>
  <div
      :class="[
      $style.field,
      $style[size],
      touched && hasError && $style.hasError,
      disabled && $style.disabled,
      focused && $style.focused,
      required && $style.required,
      ...arrayFrom(state, s => $style[s]),
      (label || 'label' in $slots) && $style.hasLabel
    ]"
  >
    <component
        :is="asLabel ? 'label' : 'div'"
        ref="triggerRef"
        :class="[$style.trigger, triggerClass]"
        :tabindex="(!disabled && !focused) ? 0 : -1"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
    >
      <span
          v-if="prependIcon || ('prepend' in $scopedSlots) || ('prepend' in $slots)"
          :class="$style.prepend"
      >
        <slot
            name="prepend"
            :icon-class="$style.icon"
        >
          <Icon
              :icon="prependIcon"
              :class="[$style.icon, iconClass]"
          />
        </slot>
      </span>
      <span
          :class="[$style.input, inputClass]"
      >
        <slot />
        <span
            v-if="label"
            :class="$style.label"
        >
          <slot name="label">
            {{ label }}
          </slot>
        </span>
      </span>
      <span
          v-if="appendIcon || ('append' in $scopedSlots) || ('append' in $slots)"
          :class="$style.append"
      >
        <slot
            name="append"
            :icon-class="$style.icon"
        >
          <span
              @mouseover="showErrorHint"
              @mouseleave="hideErrorHint"
          >
            <Icon
                :icon="appendIcon"
                :class="[$style.icon, iconClass]"
            />
          </span>
        </slot>
      </span>
    </component>
    <div
        v-if="hint || 'hint' in $slots || meta || 'meta' in $slots"
        :class="$style.footer"
    >
      <div
          v-if="hint || 'hint' in $slots"
          :class="$style.hint"
      >
        <slot name="hint">
          {{ hint }}
        </slot>
      </div>
      <div
          v-if="meta || 'meta' in $slots"
          :class="$style.meta"
      >
        <slot name="meta">
          {{ meta }}
        </slot>
      </div>
    </div>
    <div
        v-if="touched && (hasError || ('error' in $slots)) && ((appendIcon && errorHintVisible) || true)"
        :class="$style.error"
    >
      <Icon
          v-if="!['underline'].includes(state)"
          icon="cancel"
          :class="$style.errorIcon"
      />
      <div :class="$style.errorText">
        <slot name="error">
          <span>{{ arrayFrom(computedError).join('\n') }}</span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed, ref, toRef, watch,
} from "vue";
import { arrayFrom, defineComponent } from "../../../utils";
import { FieldProps } from "./index";
import { useToggle } from "../../../hooks";
import Icon from "../Icon/Icon.vue";
import { useFormField } from "../Form";

export default defineComponent<FieldProps, "focus" | "blur" | "mounted">({
  name: "Field",
  components: { Icon },
  props: {
    label: String,
    error: String,
    state: {
      type: [String, Array] as any,
      default: "bordered",
    },
    required: Boolean,
    name: String,
    disabled: Boolean,
    hint: String,
    meta: String,
    focused: Boolean,
    asLabel: Boolean,
    triggerClass: String,
    inputClass: String,
    size: {
      type: String,
      default: "medium",
    },
    prependIcon: String,
    appendIcon: String,
    iconClass: String,
  },
  emits: ["focus", "blur", "mounted"],
  setup(props, { emit }) {
    const {
      error: formError,
      touched: formTouched,
      hasFormInjection,
    } = useFormField(toRef(props, "name"));
    const hasError = computed(() => (
        !!formError.value || !!props.error
    ));
    const computedError = computed(() => (
        formError.value || props.error
    ));

    const triggerRef = ref<HTMLElement>();

    watch(triggerRef, (newRef) => {
      if (!newRef) {
        return;
      }

      emit("mounted", newRef);
    }, {
      immediate: true,
    });

    const focused = toRef(props, "focused");

    const [errorHintVisible,,, { show: showErrorHint, hide: hideErrorHint }] = useToggle(false);

    const innerTouched = ref<boolean>(hasFormInjection ? formTouched.value! : false);

    const touched = computed<boolean>({
      get() {
        return hasFormInjection ? formTouched.value! : innerTouched.value;
      },
      set(newTouched) {
        if (hasFormInjection) {
          formTouched.value = newTouched;
        }

        innerTouched.value = newTouched;
      },
    });

    watch(focused, (value) => {
      if (!value) {
        touched.value = true;
      }
    });

    return {
      hasError,
      errorHintVisible,
      showErrorHint,
      hideErrorHint,
      computedError,
      arrayFrom,
      touched,
      triggerRef,
    };
  },
});
</script>

<style lang="scss" module>
@import "../../assets/utils";

.field {
  --box-shadow: var(--stroke);
  --label: var(--black-40);
  --min-input-height: auto;

  display: flex;
  flex-direction: column;
  gap: rem(8px);

  &.hasLabel {
    padding-top: rem(8px);
  }

  &.disabled {
    &:not(.undisabled) {
      opacity: .5;
    }

    .trigger,
    .hint,
    .error {
      cursor: default;
    }
  }

  &.bordered,
  &.filled {
    --min-input-height: #{rem(23px)};

    .trigger {
      background-color: var(--white);
      box-shadow: inset 0 0 0 rem(1.35px) var(--box-shadow);

      border-radius: var(--radius);
    }

    .label {
      position: absolute;
      left: rem(15px);
      top: 0;

      @include hint(500);

      pointer-events: none;

      transform: translateY(-50%);

      padding: rem(5px);

      background-color: var(--white);
    }

    .error {
      @include supHint(500);
    }

    .icon {
      color: var(--stroke-2);
    }
  }

  &.underline {
    gap: rem(10px);

    .trigger {
      padding: 0 0 rem(10px);
      box-shadow: inset 0 rem(-1px) 0 0 var(--blue-blend);

      gap: rem(7px);

      display: flex;
      flex-direction: column;
    }

    text-align: center;

    .input {
      justify-content: center;
    }

    .meta {
      width: 0;
      display: flex;
      justify-content: flex-end;
      white-space: nowrap;
    }

    .error {
      @include text;
    }
  }

  &.focused {
    &:not(.filled) {
      --box-shadow: var(--blue);
    }
    --label: var(--blue);

    &.filled {
      .trigger {
        box-shadow:
            inset 0 0 0 rem(1.35px) var(--stroke),
            0 rem(4px) rem(20px) var(--black-010);
      }
    }
  }

  &.hasError {
    &:not(.filled), &.filled:not(.focused) {
      --box-shadow: var(--red);
    }
    --label: var(--red);
  }

  &.required {
    .label {
      &:after {
        content: ' *'
      }
    }
  }

  &.default {
    &.filled,
    &.bordered {
      .trigger {
        padding: rem(11px) rem(20px) rem(12px);
      }
    }

    .input {
      @include text(500);
    }
  }

  &.medium {
    &.filled,
    &.bordered {
      .trigger {
        padding: rem(16px) rem(20px);
      }
    }

    .input {
      @include text(500);
    }
  }

  &.auth {
    position: relative;
    & .errorIcon {
      display: none;
    }
    & input::placeholder {
      color: transparent;
    }
    & .label {
      font-size: 14px;
      line-height: 17px;
      font-weight: 500;
      letter-spacing: 0px;
      left: 15px;
      top: 28px;
      color: #a1a1a5;
      border-radius: 25px;
      transition: all .3s ease-in-out;
    }
    &.focused .label,
    & input:not(:placeholder-shown) + .label {
      left: rem(15px);
      top: 0;

      @include hint(500);
    }
    & .error {
      display: inline-flex;
      color: #fff;
      background: var(--red-3);
      position: absolute;
      bottom: -40px;
      right: 14px;
      padding: 12px;
      border-radius: 8px;
      z-index: 1;
      &::before {
        content: '';
        display: flex;
        width: 12px;
        height: 8px;
        position: absolute;
        top: -7px;
        right: 8px;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNyIgdmlld0JveD0iMCAwIDEyIDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00LjQgMS4xMzM0NkwwIDcuMDAwMTJIMTJMNy42IDEuMTMzNDZDNi44IDAuMDY2Nzg4NyA1LjIgMC4wNjY3ODkyIDQuNCAxLjEzMzQ2WiIgZmlsbD0iI0ZGNEM0QyIvPgo8L3N2Zz4K);
      }
    }
  }
}

.trigger {
  position: relative;

  inline-size: -webkit-fill-available;

  display: flex;

  gap: rem(15px);
}

.append,
.prepend {
  flex-shrink: 0;

  display: flex;
  align-items: center;
}

.icon {
  height: rem(15px);
  width: rem(15px);
}

.label {
  color: var(--label);
}

.input {
  display: flex;
  flex-grow: 1;

  min-height: var(--min-input-height);
}

.footer {
  display: flex;
  align-items: baseline;
}

.hint {
  flex-grow: 1;

  @include supHint(500);

  color: var(--black-40);
}

.meta {
  margin-left: auto;

  @include subHint(500);

  color: var(--black-40);
}

.error {
  color: var(--red);
}

.errorIcon {
  display: inline-block;
  height: rem(9px);
  width: rem(9px);
  margin-right: rem(11px);
}

.errorText {
  display: inline;

  white-space: pre-line;
}
</style>
