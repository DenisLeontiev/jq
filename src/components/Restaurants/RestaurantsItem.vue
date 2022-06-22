<template>
  <div :class="$style.item">
    <UiAvatar
      :src="src"
      :size="100"
      :text="text"
      :class="$style.avatar"
      :border="border"
    />
    <div
      :class="$style.title"
      v-html="title"
    />
  </div>
</template>

<script lang="ts" setup>
import UiAvatar from "../Ui/Avatar/Avatar.vue";

const props = defineProps<{
  title?: string;
  src?: string;
  text?: string;
  border?: boolean;
}>();
</script>

<style lang="scss" module>
@import "../../assets/utils";
.item {
  @extend %flex-center;
  flex-direction: column;
  cursor: pointer;
  &:hover {
    .avatar {
      box-shadow: 0 rem(4px) rem(14px) rgba(117, 0, 255, 0.45);
    }
    .title {
      transform: translateY(#{rem(-6px)});
    }
  }
}
.avatar {
  transition: box-shadow 0.2s;
}
.title {
  font-weight: 700;
  font-size: rem(12px);
  line-height: rem(14px);
  text-align: center;
  color: #5F00FF;
  margin-top: rem(22px);
  transition: transform 0.2s;
}
</style>
