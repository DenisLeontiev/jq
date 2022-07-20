<template>
  <component
    :is="component"
    :to="props.to"
    :exact="isLink ? exact : undefined"
    :active-class="!exact ? $style.selected : undefined"
    :exact-active-class="exact ? $style.selected : undefined"
    :class="$style.item"
    @click="onClick"
  >
    <UiIcon
      :icon="icon"
      :class="$style.icon"
    />
    <div
      v-if="!isMinimize"
      :class="$style.label"
      v-html="label"
    />
  </component>
</template>

<script lang="ts" setup>
import { computed, inject } from "vue";
import { RouteLocationRaw } from "vue-router";
import UiIcon from "../Ui/Icon/Icon.vue";

const props = defineProps<{
  icon: string;
  label: string;
  exact?: boolean;
  to?: RouteLocationRaw;
  handler?(event: MouseEvent): void;
}>();

const isLink = computed(() => (
  !!props.to
));

const component = computed(() => (
  isLink.value ? "router-link" : "div"
));

const isMinimize = inject("isMinimize");

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const onClick = (event: MouseEvent) => {
  emit("click", event);
};
</script>

<style lang="scss" module>
@import "../../assets/utils";
.item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #B3BDC7;
  cursor: pointer;
  &.selected {
    color: var(--lilac);
  }
  &:hover {
    .label {
      text-decoration: underline;
    }
  }
}
.icon {
  width: rem(24px);
  height: rem(24px);
}
.label {
  font-weight: 700;
  font-size: rem(14px);
  line-height: rem(20px);
  margin-left: rem(28px);
}
</style>
