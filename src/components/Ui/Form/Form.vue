<template>
  <form
      ref="formRef"
      :class="$style.form"
      @submit.prevent="onSubmit"
  >
    <slot />
  </form>
</template>

<script lang="ts">
import {
  computed, onMounted, provide, ref, watch, watchEffect,
} from "vue";
import ValidationError from "yup/lib/ValidationError";
import { defineComponent } from "../../../utils";
import {
  errorsInjectionKey, FormProps, formValuesInjectionKey, touchedInjectionKey,
} from "./index";
import { useErrors } from "../../hooks";

export default defineComponent<FormProps<any>, "submit" | "update:modelValue" | "update:errors">({
  name: "Form",
  model: {
    prop: "modelValue",
    event: "update:modelValue",
  },
  props: {
    modelValue: Object,
    validationSchema: Object,
    validateOnMount: Boolean,
    validateOnBlur: Boolean,
    validateOnInput: Boolean,
  },
  emits: ["submit", "update:modelValue", "update:errors"],
  setup(props, { emit }) {
    const values = computed<Record<string, any>>({
      get() {
        return props.modelValue;
      },
      set(newValues) {
        emit("update:modelValue", newValues);
      },
    });

    const {
      errorsMap,
      clearErrors,
      setErrors,
    } = useErrors();

    watch(errorsMap, (newMap) => {
      emit("update:errors", newMap);
    }, {
      immediate: true,
      deep: true,
    });

    const touchedMap = ref<Record<string, boolean>>(
        Object.keys(values.value || {}).reduce((acc, key) => ({
          ...acc,
          [key]: false,
        }), {}),
    );

    provide(errorsInjectionKey, errorsMap);
    provide(formValuesInjectionKey, values);
    provide(touchedInjectionKey, touchedMap);

    const validate = async () => {
      setErrors([]);
      if (!props.validationSchema) {
        return true;
      }

      try {
        await props.validationSchema.validate(values.value, {
          abortEarly: false,
        });

        return true;
      } catch (e) {
        const { inner } = e as ValidationError;
        setErrors(
            inner.map(({ path, message }) => ([
              path!, message,
            ])),
        );
      }

      return false;
    };

    const onSubmit = async (event: Event) => {
      const isValid = await validate();

      if (!isValid) {
        touchedMap.value = Object.keys(values.value).reduce((acc, key) => ({
          ...acc,
          [key]: true,
        }), {});
        return;
      }

      emit("submit", { setErrors, event });
    };

    onMounted(() => {
      if (props.validateOnMount) {
        validate();
      }
    });

    watch(values, () => {
      if (!props.validateOnInput) {
        return;
      }
      validate();
    }, {
      deep: true,
    });

    const formRef = ref<HTMLFormElement>();

    watchEffect((onInvalidate) => {
      if (!props.validateOnBlur) {
        return;
      }
      const onBlur = () => {
        requestAnimationFrame(validate);
      };

      if (formRef.value) {
        formRef.value.addEventListener("focusout", onBlur as any);
      }

      onInvalidate(() => {
        if (!formRef.value) {
          return;
        }

        formRef.value.removeEventListener("focusout", onBlur as any);
      });
    });

    return {
      onSubmit,
      setErrors,
      clearErrors,
      formRef,
    };
  },
});
</script>

<style lang="scss" module>
@import "../../assets/utils";

.form {
}
</style>
