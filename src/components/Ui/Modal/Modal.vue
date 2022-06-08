<template>
  <div
    :class="[
      $style.modal,
      $style[computedVariant]
    ]"
  >
    <div :class="$style.backdrop" />
    <Suspense>
      <template #default>
        <div
          ref="containerRef"
          :class="[
            $style.container,
            panning && $style.panning
          ]"
          :style="panning && {
            transform: `translateY(${lnDelta}px)`
          }"
        >
          <slot />
        </div>
      </template>
      <template #fallback>
        <div :class="$style.loader">
          <Loader :size="isMobile ? LoaderSize.small : LoaderSize.medium" />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import {
  useMobile, useOutsideClick, usePan,
} from "../../../common";
import { type ModalProps, ModalVariant } from "./index";
import Loader from "../Loader/Loader.vue";
import { LoaderSize } from "../Loader";

const props = withDefaults(defineProps<ModalProps>(), {
  closeable: true,
});

const { isMobile } = useMobile();

const computedVariant = computed(() => (
  props.variant || (isMobile.value ? ModalVariant.stack : ModalVariant.center)
));

const emit = defineEmits<{
  (e: "close"): void;
}>();

const close = () => {
  emit("close");
};

const containerRef = ref<HTMLElement>();

useOutsideClick({
  handler(event) {
    if (!props.closeable) {
      return;
    }
    if (!containerRef.value) {
      return;
    }
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    if (
      !(
        containerRef.value === event.target
        || (containerRef.value?.contains(event.target))
      )
    ) {
      close();
    }
  },
});

const { delta, panning } = usePan(
  containerRef,
  {
    triggerHandler: () => {
      if (delta.value > 0) {
        close();
      }
    },
    triggerDelta: (target) => target.clientHeight / 3,
  },
  computed(() => props.closeable && (props.variant === ModalVariant.stack)),
);

const lnDelta = computed(() => Math.max(delta.value, 0) / 1.5);
</script>

<style lang="scss" module>
@import "../../../assets/utils";

.modal {
  display: flex;
  flex-direction: column;

  position: relative;

  &.center {
    padding: rem(20px) rem(30px);

    justify-content: center;

    .container {
      margin: auto;
    }
  }

  &.stack {
    justify-content: flex-end;
  }
}

.backdrop {
  background: linear-gradient(0deg, rgba(21, 21, 30, 0.9), rgba(21, 21, 30, 0.9));
  position: absolute;
  inset: 0;
}

.container {
  max-height: 100%;
  position: relative;
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: .7;
}
</style>
