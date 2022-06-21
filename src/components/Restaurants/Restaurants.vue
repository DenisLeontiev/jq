<template>
  <UiContainer :class="$style.restaurants">
    <ContainerHeader
      :class="$style.header"
      title="Рестораны"
    >
      <UiTagButton label="Все" />
    </ContainerHeader>
    <div :class="$style.list">
      <RestaurantsItem
        v-for="item in items"
        :key="item.title"
        :title="item.title"
        :src="item.src"
        :size="100"
        :text="item.text"
        :class="$style.item"
      />
    </div>
  </UiContainer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import UiTagButton from "../Ui/TagButton/TagButton.vue";
import UiContainer from "../Ui/Container/Container.vue";
import ContainerHeader from "../ContainerHeader.vue";
import { AvatarProps } from "../Ui/Avatar";
import RestaurantsItem from "./RestaurantsItem.vue";

interface Items extends AvatarProps {
  title?: string;
}

const items = ref<Array<Items>>(
  [
    {
      text: "ALL",
      border: true,
      title: "ALL",
    },
    {
      src: "https://picsum.photos/300/300",
      title: "Restaurant 1",
    },
    {
      src: "https://picsum.photos/300/300",
      title: "Restaurant 2",
    },
    {
      src: "https://picsum.photos/300/300",
      title: "Restaurant 3",
    },
    {
      text: "R",
      border: true,
      title: "ALL",
    },
  ],
);
</script>

<style lang="scss" module>
@import "../../assets/utils";
.restaurants {
  max-width: rem(486px);
}
.header {
  margin-bottom: rem(30px);
}
.list {
  display: flex;
  flex-wrap: wrap;
}
.item {
  &:not(:nth-child(3n + 3)) {
    margin-right: rem(60px);
  }
  &:nth-child(n + 4) {
    margin-top: rem(30px);
  }
}
</style>
