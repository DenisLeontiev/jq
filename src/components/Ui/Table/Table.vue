<template>
  <table :class="$style.table">
    <thead :class="$style.thead">
      <tr>
        <th
          v-for="thItem in headItems"
          :key="thItem"
          :class="$style.th"
          @click="setSort(thItem)"
        >
          {{ thItem.label }}
        </th>
      </tr>
    </thead>
    <tbody :class="$style.tbody">
      <tr
        v-for="(trItem, index) in bodyItems"
        :key="index"
        :class="$style.tr"
      >
        <td
          v-for="tdItem in trItem"
          :key="tdItem.label"
          :class="$style.td"
        >
          <div :class="$style.value">
            <div
              v-if="isAvatar(tdItem.variant)"
              :class="$style.avatarWrapper"
            >
              <UiAvatar
                :src="tdItem.extra"
                :size="36"
                :class="$style.avatar"
              />
              <UiIcon
                :icon="avatarIcon(tdItem.variant)"
                :class="$style.status"
              />
            </div>
            <span>{{ tdItem.label }}</span>
            <span
              v-if="tdItem.variant === 'text'"
              v-html="tdItem.extra"
            />
            <UiIcon
              v-if="tdItem.variant === 'star'"
              icon="Star"
              :class="$style.star"
            />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { type TableProps } from "./index";
import UiAvatar from "../Avatar/Avatar.vue";
import UiIcon from "../Icon/Icon.vue";

const props = withDefaults(defineProps<TableProps>(), {});

const headItemsKeys = Object.keys(props.bodyItems[0]);
const headItems = ref(headItemsKeys.map((item) => ({ label: item, sort: null })));

function isAvatar(variant: string) {
  return variant.includes("avatar");
}
function avatarIcon(variant: string) {
  return variant.replace("avatar", "");
}

interface Item {
  label: string;
  sort: string|null;
}

function setSort(item:Item) {
  if (!props.isSort) return;
  if (!item.sort) {
    item.sort = "up";
  } else if (item.sort === "down") {
    item.sort = null;
  } else if (item.sort === "up") {
    item.sort = "down";
  }
}
</script>

<style lang="scss" module>
@import "../../../assets/utils";
.table {
  width: 100%;

  border-collapse: separate;
  border-spacing: 0;
  text-align: left;

  color: #030307;
  .tr {
    transition: background-color 0.2s;
    cursor: pointer;
    td {
      &:first-child {
        border-top-left-radius: rem(8px);
        border-bottom-left-radius: rem(8px);
      }
      &:last-child {
        border-top-right-radius: rem(8px);
        border-bottom-right-radius: rem(8px);
      }
    }
    &:hover {
      background-color: #F8F8F8;
    }
  }
  .th {
    height: rem(54px);

    font-weight: 700;
    font-size: rem(10px);
    line-height: rem(12px);

    user-select: none;
    &:first-child {
      padding-left: rem(8px);
    }
  }
  .td {
    height: rem(54px);

    font-weight: 600;
    font-size: rem(12px);
    line-height: rem(16px);
    &:first-child {
      padding-left: rem(8px);
    }
  }
  .value {
    @extend %flex-start;
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
}
</style>
