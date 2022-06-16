<template>
  <a :href="href" :class="$style.contact">
    <UiIcon :icon="variant" :class="$style.icon" />
    <div :class="$style.link" v-html="label" />
  </a>
</template>

<script lang="ts" setup>
import UiIcon from "../Icon/Icon.vue";
import { type ContactProps, ContactVariant } from "./index";

withDefaults(
  defineProps<ContactProps>(),
  {
    variant: "Phone" as ContactVariant,
  },
);

</script>

<style lang="scss" module>
@import "../../../assets/utils";
.contact {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
  &:hover {
    .link {
      text-decoration: underline;
    }
  }
}
.icon {
  margin-right: rem(12px);
  color: #030307;
  height: rem(16px);
  width: rem(16px);
}
.link {
  color: #030307;
  font-weight: 600;
  font-size: rem(12px);
  line-height: rem(16px);
  text-align: center;
  flex-shrink: 2;
}
</style>
