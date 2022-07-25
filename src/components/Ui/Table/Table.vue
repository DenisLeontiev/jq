<template>
  <table :class="[$style.table, $style[size]]">
    <thead :class="$style.thead">
      <tr>
        <th
          v-for="thItem in headItems"
          :key="thItem"
          :class="$style.th"
          @click="setSort(name, thItem)"
        >
          <div :class="$style.value">
            <span>{{ thItem }}</span>
            <TableSort
              v-if="isSort"
              :sort="getSortCurrentColumn({name, column: thItem})"
              :class="$style.sort"
            />
          </div>
        </th>
      </tr>
    </thead>
    <tbody :class="$style.tbody">
      <tr
        v-for="(trItem, index) in bodyItems"
        :key="index"
        :class="$style.tr"
        @click="onClick(trItem)"
      >
        <td
          v-for="tdItem in trItem"
          :key="tdItem.label"
          :class="$style.td"
        >
          <TableItem
            :label="tdItem.label"
            :variant="tdItem.variant"
            :extra="tdItem.extra"
            :class="$style.item"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { type TableProps, TableSize } from "./index";
import { useTableStore } from "../../../stores";
import TableSort from "./TableSort.vue";
import TableItem from "./TableItem.vue";

const tableStore = useTableStore();
const setSort = tableStore.setColumnFilters;
const { getSortCurrentColumn } = tableStore;

const props = withDefaults(defineProps<TableProps>(), {
  size: "regular" as TableSize,
});

const headItems = ref(Object.keys(props.bodyItems[0]));

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const onClick = (event: MouseEvent) => {
  emit("click", event);
};
</script>

<style lang="scss" module>
@import "../../../assets/utils";
.table {
  width: 100%;

  border-collapse: separate;
  border-spacing: 0 rem(20px);
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
      .td {
        border-bottom: 1px solid #F8F8F8;
      }
    }
  }
  .th {
    height: rem(24px);

    font-weight: 700;
    font-size: rem(10px);
    line-height: rem(12px);

    user-select: none;
    cursor: pointer;
    &:first-child {
      padding-left: rem(8px);
    }
  }
  .td {
    transition: border-bottom 0.2s;
    border-bottom: 1px solid #EAEEF1;

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
  .sort {
    margin-left: rem(8px);
  }
}
</style>
