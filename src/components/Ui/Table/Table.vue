<template>
  <table :class="$style.table">
    <thead :class="$style.thead">
      <tr>
        <th
          v-for="thItem in headItems"
          :key="thItem"
          :class="$style.th"
        >
          {{ thItem }}
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
              v-if="tdItem.variant.includes('avatar')"
              :class="$style.avatarWrapper"
            >
              <UiAvatar
                :src="tdItem.extra"
                :size="36"
                :class="$style.avatar"
              />
            </div>
            {{ tdItem.label }}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { type TableProps } from "./index";
import UiAvatar from "../Avatar/Avatar.vue";

const props = withDefaults(defineProps<TableProps>(), {});
</script>

<style lang="scss" module>
@import "../../../assets/utils";
.table {
  width: 100%;

  border-collapse: separate;
  border-spacing: 0;
  text-align: left;

  color: #030307;
}
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
  &:first-child {
    padding-left: rem(16px);
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
</style>
