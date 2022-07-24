<template>
  <div :class="$style.employeesCard">
    <UiAvatar
      :src="src"
      :size="100"
      :class="$style.avatar"
    />
    <div :class="$style.title">
      {{ title }}
    </div>
    <div :class="$style.achievement" />
    <div :class="$style.description">
      {{ descriptionMapping[variant] }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import UiAvatar from "../Ui/Avatar/Avatar.vue";

const props = defineProps<{
  src?: string;
  title?: string;
  variant?: string;
  value?: string;
}>();

const descriptionMapping = {
  maxReviews: "Maximum positive reviews",
  bestRating: "Best average rating",
  maxTip: "Maximum tip amount",
};

</script>

<style lang="scss" module>
@import "../../assets/utils";
.employeesCard {
  max-width: rem(120px);

  @extend %flex-start;
  flex-direction: column;
  text-align: center;
}
.avatar {
  margin-bottom: rem(30px);
}
.title {
  font-weight: 700;
  font-size: rem(14px);
  line-height: rem(20px);

  color: #5F00FF;

  margin-bottom: rem(8px);
}
.description {
  font-size: rem(10px);
  line-height: rem(12px);

  color: #030307;
}
</style>
