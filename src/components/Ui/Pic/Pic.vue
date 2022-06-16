<template>
  <picture>
    <source
      v-for="source in sources"
      :key="source.type"
      :type="source.type"
      :srcset="source.src"
    >
    <img
      ref="imageRef"
      :alt="alt"
      :src="src"
      :style="{
        objectFit: fit
      }"
      :class="[
        $style.pic,
        $style[fit],
        lazy && $style.lazy,
        loading && $style.loading,
        hasError && $style.error,
        !loading && !hasError && $style.loaded,
        imgClass
      ]"
      @load="onLoaded"
      @error="onError"
    >
  </picture>
</template>

<script lang="ts" setup>
import { computed, ref, watchEffect } from "vue";
import { filteredArray, useImagePreloader, useState } from "../../../common";
import { PicFit, type PicProps } from "./index";

const props = withDefaults(defineProps<PicProps>(), {
  fit: "contain" as PicFit,
});

interface ImageSource {
  type: string;
  src: string
}

const sources = computed<Array<ImageSource>>(() => {
  const webpSrc: string | undefined = filteredArray<string>([
    props.src,
    props.jpgSrc,
    props.pngSrc,
  ])[0]?.replace(/(.*)\.(?:jpeg|jpg|png)(.*|)/, "$1.webp$2");

  return filteredArray<ImageSource>([
    props.webpSrc && {
      type: "image/webp",
      src: props.webpSrc,
    },
    !props.webpSrc && props.local && webpSrc && {
      type: "image/webp",
      src: webpSrc,
    },
    props.jpgSrc && {
      type: "image/jpeg",
      src: props.jpgSrc,
    },
    props.pngSrc && {
      type: "image/png",
      src: props.pngSrc,
    },
  ]);
});

const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);
const hasError = computed(() => !!error.value);

const imageRef = ref<HTMLImageElement>();

const {
  onLoaded,
  onError,
} = useImagePreloader(
  sources,
  setLoading,
  setError,
  () => false,
);

const emit = defineEmits<{
  (e: "update:loading", value: boolean): void
  (e: "update:has-error", value: boolean): void
}>();

watchEffect(() => {
  emit("update:loading", loading.value);
});

watchEffect(() => {
  emit("update:has-error", hasError.value);
});
</script>

<style lang="scss" module>
.pic {
  display: block;
  max-width: 100%;
  max-height: 100%;

  &.lazy {
    transition: opacity .25s ease, transform .25s ease;

    &.loading, &.hasError {
      opacity: 0;
    }
  }
}
</style>
