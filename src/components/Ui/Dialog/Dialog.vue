<template>
  <div
    :class="[
      $style.dialog,
      isMobile && $style.mobile,
      $style[computedVariant]
    ]"
  >
    <div :class="$style.header">
      <div :class="$style.prepend">
        <button
          v-if="returnable"
          :class="$style.icon"
          @click="onReturn"
        >
          <Icon
            package="Outlined"
            icon="BackLeft"
          />
        </button>
      </div>
      <div :class="$style.title">
        <slot name="title">
          <span>{{ title }}</span>
        </slot>
      </div>
      <div :class="$style.append">
        <button
          v-if="closeable"
          :class="$style.icon"
          @click="onClose"
        >
          <Icon
            package="Outlined"
            icon="Cancel"
          />
        </button>
      </div>
    </div>
    <div :class="$style.content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useMobile } from "../../../common";
import { type DialogProps, DialogVariant } from "./index";
import Icon from "../Icon/Icon.vue";

const props = withDefaults(
  defineProps<DialogProps>(),
  {
    closeable: true,
  },
);

const emit = defineEmits<{
  (e: "close", event: MouseEvent): void,
  (e: "return", event: MouseEvent): void
}>();

const { isMobile } = useMobile();

const computedVariant = computed(() => (
  props.variant || (isMobile.value ? DialogVariant.stack : DialogVariant.round)
));

const onClose = (event: MouseEvent) => {
  if (!props.closeable) {
    return;
  }
  emit("close", event);
};

const onReturn = (event: MouseEvent) => {
  if (!props.returnable) {
    return;
  }
  emit("close", event);
};
</script>

<style lang="scss" module>
@import "../../../assets/utils";

.dialog {
  background: var(--color-White_1);
  padding: rem(40px) rem(50px);
  border-radius: rem(25px);

  &.stack {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  &.mobile {
    padding: rem(40px) rem(35px);
  }
}

.header {
  display: flex;
  align-items: center;
}

.prepend,
.append {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.prepend + *,
.title + * {
  margin-left: rem(20px);
}

.icon {
  height: rem(16px);
  width: rem(16px);
  color: var(--color-Secondary_Gray_5);
  cursor: pointer;
}

.title {
  flex-grow: 1;
  width: 0;
  overflow: hidden;
  white-space: pre-line;
  text-overflow: ellipsis;

  text-align: center;

  color: var(--color-Text_Light_Primary);
}

.content {

}
</style>
