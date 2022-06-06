<template>
  <component
    :is="component"
    :to="!isExternalLink ? to : undefined"
    :href="isExternalLink ? to : undefined"
    :target="isLink ? target : undefined"
    :type="!isLink ? type : undefined"
    :exact="isLink ? exact : undefined"
    :active-link="!exact ? $style.active : undefined"
    :exact-active-link="exact ? $style.active : undefined"
    :disabled="disabled"
    :class="[
      $style.button,
      $style[variant],
      circle && $style.circle,
      wide && !circle && $style.wide,
      disabled && $style.disabled,
      focusable && $style.focusable
    ]"
    @click="onClick"
  >
    <div
      v-if="label || 'default' in $slots"
      :class="$style.content"
    >
      <slot :icon-name="$style.icon">
        <span>{{ label }}</span>
      </slot>
    </div>
  </component>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { type ButtonProps, ButtonVariant } from "./index";

const props = withDefaults(
  defineProps<ButtonProps>(),
  {
    type: "button",
    variant: "primary" as ButtonVariant,
    focusable: true,
  },
);

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const isLink = computed(() => (
  !!props.to
));

const isExternalLink = computed(() => (
  typeof props.to === "string"
));

const component = computed(() => (
  isLink.value ? (
    isExternalLink.value ? "a" : "router-link"
  ) : "button"
));

const onClick = (event: MouseEvent) => {
  if (props.disabled) {
    return;
  }
  emit("click", event);
};
</script>

<style lang="scss" module>
    @import '../../../assets/utils';

    .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 44px;
        padding: 12px 24px;
        gap: 12px;
        border-radius: 22px;
        cursor: pointer;
        transition: 200ms ease-in-out;
        border: none;
        box-shadow: none;
        font-weight: 700;
    }

    .primary {
        background-color: var(--lilac);
        color: #fff;

        @include fieldState {
            background-color: var(--lilac-hover);
        }
    }

    .secondary {
        background-color: var(--violet);
        color: var(--lilac);

        &:hover,
        &:active,
        &:focus {
            background-color: var(--lilac-hover);
        }
    }

    .disabled {
        opacity: .3;
        user-select: none;
        pointer-events: none;
        touch-action: none;
    }
</style>
