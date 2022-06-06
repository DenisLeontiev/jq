<template>
  <div
    :class="[
      $style.tagButton,
      disabled && $style.disabled,
      selected && $style.selected,
    ]"
    @click="onClick"
  >
    <div
      v-if="label || 'label' in $slots"
      :class="$style.content"
    >
      {{ label }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type TagButtonProps } from "./index";

const props = withDefaults(
  defineProps<TagButtonProps>(),
  {
    disabled: false,
    selected: false,
  },
);

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const onClick = (event: MouseEvent) => {
  if (props.disabled) {
    return;
  }
  emit("click", event);
};
</script>

<style lang="scss" module>
@import "../../../assets/utils";

.tagButton {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: rem(4px) rem(12px);
    border-radius: 10px;
    border: 1px solid var(--lilac);
    color: var(--lilac);
    font-weight: 600;
    font-size: rem(10px);
    line-height: rem(12px);
    gap: 10px;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover {
        background-color: var(--violet);
    }
}

.selected {
    border-color: transparent;
    background-color: var(--violet);
}

.disabled {
    opacity: .3;
    user-select: none;
    touch-action: none;
    pointer-events: none;
}
</style>