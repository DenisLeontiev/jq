<template>
    <Field>
        <input
            v-if="type === 'text'"
            ref="inputRef"
            v-model="value"
            :placeholder="placeholder"
            :disabled="disabled"
            :class="$style.input"
            :type="type === 'password' ? (passwordVisible ? 'text' : 'password') : type"
            :inputmode="type === 'number' ? 'numeric' : undefined"
            :pattern="type === 'number' ? '[-+]?[0-9]*[.,]?[0-9]+' : undefined"
            :step="0.01"
        />
        <textarea
            v-else
            ref="inputRef"
            v-model="value"
            :placeholder="placeholder"
            :disabled="disabled"
            :class="$style.input"
            :rows="rows"
        />
    </Field>
</template>

<script lang="ts" setup>
import { computed, defineComponent, ref, toRef, watchEffect } from 'vue';
import Field from '../Field/Field.vue';
import { InputProps } from './index';


const props = defineProps<InputProps, 'update:modelValue' | 'mounted'>();
</script>

<style lang="scss" module>
    .input {
        
    }
</style>