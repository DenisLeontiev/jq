<template>
  <router-link
    :to="to"
    :class="$style.employeesCard"
  >
    <UiAvatar
      :src="src"
      :size="100"
      :class="$style.avatar"
    />
    <div :class="$style.title">
      {{ title }}
    </div>
    <div :class="$style.achievement">
      <div
        v-if="variant === 'bestRating'"
        :class="$style.starWrapper"
      >
        <span :class="$style.count">{{ value }}</span>
        <div :class="$style.list">
          <UiIcon
            v-for="item in Math.round(parseFloat(value))"
            :key="item"
            icon="Star"
            :class="$style.star"
          />
        </div>
      </div>
      <div
        v-else
        :class="$style.value"
      >
        {{ value }}
      </div>
    </div>
    <div :class="$style.description">
      {{ descriptionMapping[variant] }}
    </div>
  </router-link>
</template>

<script lang="ts" setup>
import UiAvatar from "../Ui/Avatar/Avatar.vue";
import UiIcon from "../Ui/Icon/Icon.vue";

const props = defineProps<{
  src?: string;
  title?: string;
  variant?: string;
  value?: string;
  to?: any;
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

  cursor: pointer;
  &:hover {
    .avatar {
      box-shadow: 0 rem(4px) rem(14px) rgba(117, 0, 255, 0.4);
    }
  }
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

  margin-top: rem(8px);
}
.value {
  font-weight: 700;
  font-size: rem(16px);
  line-height: rem(24px);
}
.achievement {
  color: #030307;
}
.starWrapper {
  padding: rem(4px) 0;
  @extend %flex-start
}
.list {
  @extend %flex-start;
  margin-left: rem(8px);
}
.star {
  width: rem(16px);
  height: rem(16px);
}
.count {
  font-weight: 700;
  font-size: rem(12px);
  line-height: rem(16px);
  color: #030307;
}
</style>
