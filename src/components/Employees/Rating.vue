<template>
  <UiContainer :class="$style.restaurants">
    <UiContainerHeader
      :class="$style.header"
      title="Top employees by average rating"
    >
      <UiTagButton label="Show All" />
    </UiContainerHeader>

    <table :class="$style.table">
      <thead>
        <tr>
          <th>Employee</th>
          <th>Average rating</th>
          <th>Transactions qty.</th>
          <th />
        </tr>
      </thead>

      <tbody>
        <tr>
          <td :class="$style.avatar">
            <UiAvatar
              src="https://picsum.photos/100/100"
              :size="36"
              :class="$style.avatar"
            />
          </td>
          <td />
          <td />
          <td />
        </tr>
      </tbody>
    </table>
  </UiContainer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import UiTagButton from "../Ui/TagButton/TagButton.vue";
import UiContainer from "../Ui/Container/Container.vue";
import UiContainerHeader from "../Ui/ContainerHeader/ContainerHeader.vue";
import UiAvatar from "../Ui/Avatar/Avatar.vue";

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
.pagination {
  margin-top: rem(28px);
}
</style>
