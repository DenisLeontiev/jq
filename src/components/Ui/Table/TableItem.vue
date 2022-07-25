<template>
  <TableItemFeedback
    v-if="variant === 'feedback'"
    :items="label"
    :is-feedback="!!extra"
  />
  <div
    v-else
    :class="[$style.tableItem, variant === 'date' && $style.date]"
  >
    <div
      v-if="isAvatar(variant)"
      :class="$style.avatarWrapper"
    >
      <UiAvatar
        :src="extra"
        :size="36"
        :class="$style.avatar"
      />
      <UiIcon
        :icon="avatarIcon(variant)"
        :class="$style.status"
      />
    </div>
    <div
      v-if="variant === 'smail'"
      :class="$style.smile"
    >
      {{ smiles[label] }}
    </div>
    <span>{{ label }}</span>
    <span
      v-if="variant === 'text' || variant === 'date'"
      :class="[$style.extra]"
      v-html="extra"
    />
    <UiIcon
      v-if="variant === 'star' || variant === 'smail'"
      icon="Star"
      :class="$style.star"
    />
  </div>
</template>

<script lang="ts" setup>
import UiAvatar from "../Avatar/Avatar.vue";
import UiIcon from "../Icon/Icon.vue";
import { TableItemProps } from "./index";
import TableItemFeedback from "./TableItemFeedback.vue";

const props = withDefaults(defineProps<TableItemProps>(), {});

function isAvatar(variant: string) {
  return variant.includes("avatar");
}
function avatarIcon(variant: string) {
  return variant.replace("avatar", "");
}

const smiles = ["🤔", "😱", "😢", "😐", "😊", "😍"];
</script>

<style lang="scss" module>
@import "../../../assets/utils";
.tableItem {
  @extend %flex-start;
  &.date {
    color: #9FA8B1;
    .extra {
      color: #7C868F;
      margin-left: rem(4px);
    }
  }
}
.avatarWrapper {
  position: relative;
  display: inline-flex;
  margin-right: rem(10px);
}
.status {
  width: rem(17px);
  height: rem(17px);

  position: absolute;
  bottom: rem(-3px);
  right: rem(-3px);
  z-index: 1;
}
.star {
  width: rem(16px);
  height: rem(16px);
  margin-left: rem(8px);
}
.smile {
  margin-right: rem(24px);
  font-size: rem(16px);
}
</style>
