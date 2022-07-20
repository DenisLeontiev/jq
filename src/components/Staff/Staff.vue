<template>
  <UiContainer :class="$style.staff">
    <UiContainerHeader
      :class="$style.header"
      title="Сотрудники"
    >
      <div :class="$style.row">
        <UiTagButton label="Последние активные" />
        <UiTagButton label="Все" />
      </div>
    </UiContainerHeader>
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
    <UiPagination
      :count="5"
      :current="current"
      variant="regular"
      :class="$style.pagination"
      @setCurrent="setCurrent"
    />
  </UiContainer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import UiTagButton from "../Ui/TagButton/TagButton.vue";
import UiContainer from "../Ui/Container/Container.vue";
import UiContainerHeader from "../Ui/ContainerHeader/ContainerHeader.vue";
import { AvatarProps } from "../Ui/Avatar";
import RestaurantsItem from "./RestaurantsItem.vue";
import UiPagination from "../Ui/Pagination/Pagination.vue";

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
const current = ref<number>(1);
const setCurrent = (value: number) => {
  current.value = value;
};
</script>

<style lang="scss" module>
@import "../../assets/utils";
.header {
  margin-bottom: rem(20px);
}
.row {
}
.list {
}
.item {
}
.pagination {
  margin-top: rem(28px);
}
</style>
