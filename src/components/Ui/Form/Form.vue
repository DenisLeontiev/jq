<template>
  <form
    ref="formRef"
    :class="$style.form"
    @submit.prevent="onSubmit"
  >
    <slot />
  </form>
</template>

<script lang="ts" setup>
    import { toRef } from 'vue';
    import { type FormProps } from './index';

    const props = defineProps<FormProps>();
</script>

<style lang="scss" module>
    .form {}
</style>
