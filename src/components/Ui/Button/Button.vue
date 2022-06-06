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
      $style[size],
      $style[variant],
      circle && $style.circle,
      square && $style.square,
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
    .button {
        
    }
</style>
