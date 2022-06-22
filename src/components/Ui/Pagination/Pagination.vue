<template>
  <div :class="$style.pagination">
    <div
      v-if="variant !== 'light'"
      :class="$style.counter"
    >
      <div :class="[$style.current, $style.active]">
        {{ current }}
      </div>
      <div :class="$style.from">
        из
      </div>
      <div :class="$style.count">
        {{ count }}
      </div>
    </div>
    <div :class="$style.list">
      <div
        v-for="item in count"
        :key="item"
        :class="[$style.item, item === current && $style.active]"
        @click="onClick(item)"
      >
        {{ item }}
      </div>
    </div>
    <div :class="$style.nav">
      <div
        :class="[$style.arrowWrapper, disableLeft && $style.disable]"
        @click="onClick(current - 1)"
      >
        <UiIcon
          icon="Chevronleft"
          :class="[$style.arrow, $style.left]"
        />
      </div>
      <div
        :class="[$style.arrowWrapper, disableRight && $style.disable]"
        @click="onClick(current + 1)"
      >
        <UiIcon
          icon="Chevronright"
          :class="[$style.arrow, $style.right]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { type PaginationProps, PaginationVariant } from "./index";
import { UiIcon } from "../Icon";

const props = withDefaults(defineProps<PaginationProps>(), {
  variant: "regular" as PaginationVariant,
});

const disableLeft = computed(() => props.current <= 1);
const disableRight = computed(() => props.current >= props.count);

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const onClick = (event: MouseEvent) => {
  emit("setCurrent", event);
};

</script>

<style lang="scss" module>
@import "../../../assets/utils";
.pagination {
  @extend %flex-start;
  color: #C6C6C6;
  width: 100%;
  user-select: none;
}
.counter {
  @extend %flex-start;
  font-weight: 700;
  font-size: rem(12px);
  line-height: rem(16px);
  color: #C6C6C6;
}
.from {
  margin: 0 rem(6px);
}
.list {
  @extend %flex-start;
  margin-left: auto;
}
.item {
  font-weight: 600;
  transition: color 0.2s;
  font-size: rem(12px);
  line-height: rem(16px);
  cursor: pointer;
  &:hover {
    color: #5F00FF;
  }
  &:not(:last-child) {
    margin-right: rem(8px);
  }
}
.active {
  color: #5B5B5B;
  pointer-events: none;
}
.nav {
  @extend %flex-start;
  margin-left: rem(12px);
}
.arrowWrapper {
  border-radius: 50%;
  background-color: #E6DDF6;
  transition: background-color 0.2s;
  width: rem(24px);
  height: rem(24px);
  @extend %flex-center;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: rem(16px);
  }
  &.disable {
    pointer-events: none;
    background-color: #F8F8F8;
    .arrow {
      color: #B3BDC7;
    }
  }
  &:hover {
    background-color: #d8c7f5;
  }
}
.arrow {
  width: rem(8px);
  height: rem(12px);
  color: #5F00FF;
}

</style>
