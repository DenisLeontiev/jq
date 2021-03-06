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
      v-if="label || 'default' in $slots"
      :class="$style.content"
    >
      <slot :icon-name="$style.icon">
        <span>{{ label }}</span>
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
          :icon="appendIcon"
          :class="$style.icon"
        />
      </slot>
    </div>
  </component>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { type ButtonProps, ButtonVariant } from "./index";
import Icon from "../Icon/Icon.vue";

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
  --radius: #{rem(22px)};
  --height: #{rem(44px)};
  --padding: #{rem(24px)};
  --fw: 600;
  --icon: #{rem(24px)};

  --fz: #{rem(14px)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--height);
  padding: 0 var(--padding);
  gap: rem(12px);
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 200ms ease-in-out;
  border: none;
  box-shadow: none;
  font-weight: var(--fw);
  font-size: var(--fz);
}

.primary {
  background-color: var(--lilac);
  color: #fff;

  @include fieldState {
    background-color: var(--lilac-hover);
  }
}

.filter {
  --radius: #{rem(4px)};
  --height: #{rem(30px)};
  --padding: #{rem(12px)};
  --fz: #{rem(12px)};
  --fw: 600;
  --icon: #{rem(12px)};

  background-color: var(--lilac);
  color: #fff;

  @include fieldState {
    background-color: var(--lilac-hover);
  }
}

.secondary {
  background-color: var(--violet);
  color: var(--lilac);

  @include fieldState {
    background-color: var(--lilac);
    color: #fff;
  }
}

.outline {
  background-color: transparent;
  color: var(--lilac);
  border: 1px solid var(--lilac);

  @include fieldState {
    background-color: var(--violet);
  }
}

.outlineWhite {
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;

  @include fieldState {
    background-color: #fff;
    color: var(--lilac);
  }
}

.white {
  background-color: #fff;
  color: var(--lilac);
  border: 1px solid #fff;

  @include fieldState {
    border-color: var(--lilac);
    color: var(--lilac);
  }
}

.gradient {
  position: relative;
  overflow: hidden;
  color: #fff;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    width: calc(100% + 20px);
    height: 100%;
    left: -20px;
    top: 0;
    background: var(--gradient);
    transition: 200ms ease-in-out;
    user-select: none;
  }

  @include fieldState {

    &::before {
      transform: translateX(20px);
    }
  }
}

.disabled {
  opacity: .3;
  user-select: none;
  pointer-events: none;
  touch-action: none;
}

.icon {
  flex-shrink: 0;
  width: var(--icon);
  height: var(--icon);
}
</style>
