<template>
  <div :class="$style.nav">
    <SidebarNavItem
      v-for="item in items"
      :key="item"
      :to="item.to"
      :icon="item.icon"
      :label="item.label"
      :class="$style.item"
      @click="onMenuItemClick(item, $event)"
    />
  </div>
</template>

<script lang="ts" setup>
import { RouteLocationRaw } from "vue-router";
import SidebarNavItem from "./SidebarNavItem.vue";

interface Item {
  key?: string;
  icon: string;
  label: string;
  to?: RouteLocationRaw;
  handler?(event: MouseEvent): void;
}
const items: Array<Item> = [{
  key: "home",
  icon: "Home",
  label: "Главная",
  to: "/",
}, {
  key: "analytics",
  icon: "Analytics",
  label: "Аналитика",
  to: "/",
  // to: { name: "analytics" },
}, {
  key: "restaurants",
  icon: "Domain",
  label: "Рестораны",
  to: "/",
  // to: { name: "restaurants" },
}, {
  key: "staff",
  icon: "Accountmultiple",
  label: "Сотрудники",
  to: "/",
  // to: { name: "staff" },
}, {
  key: "staff",
  icon: "Accountmultiple",
  label: "Сотрудники",
  to: "/",
  // to: { name: "staff" },
}, {
  key: "settings",
  icon: "Cog",
  label: "Настройки",
  to: "/",
  // to: { name: "settings" },
}, {
  key: "logout",
  icon: "Logout",
  label: "Выход",
  handler: () => {
    console.log("Logout");
  },
}];

const onMenuItemClick = (item: Item, event: MouseEvent) => {
  if (!item.handler) {
    return;
  }

  item.handler(event);
};
</script>

<style lang="scss" module>
@import "../../assets/utils";
.nav {
  width: 100%;
  border-top: 1px solid #EAEEF1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: rem(32px);
}
.item {
  margin-bottom: rem(40px);
}
</style>
