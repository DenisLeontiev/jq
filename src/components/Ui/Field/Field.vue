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
        touched && $style.touched
    ]"
  >
    <component
      :is="asLabel ? 'label' : 'div'"
      ref="triggerRef"
      :class="[$style.trigge, triggerClass]"
      :tabindex="(!disabled && !focused) ? 0 : -1"
    >
      <span
        v-if="label"
        :class="$style.label"
      >
        <slot name="label">
          {{ label }}
        </slot>
      </span>
      <span
        :class="[$style.input, inputClass]"
      >
        <slot />
      </span>
      <span
        v-if="helperText || (hasError || ('error' in $slots)) || success"
        :class="[
          $style.helperText,
          hasError && $style.error,
          success && $style.success
        ]"
      >
        {{ hasError || success || helperText }}
      </span>
    </component>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRef } from 'vue';
import { type FieldProps } from './index';

const props = defineProps<FieldProps>();


</script>

<style lang="scss" module>
  .root {
    background-color: rgba(0, 0, 0, .45);
  }
</style>