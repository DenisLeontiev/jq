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
        <router-link
          v-slot="{href, navigate}"
          custom
          to="/"
        >
          <tr
            :href="href"
            @click="navigate"
          >
            <td>
              <div :class="$style.name">
                <div :class="$style.avatar">
                  <UiAvatar
                    src="https://picsum.photos/100/100"
                    :size="36"
                  />
                  <UiIcon
                    icon="Active"
                    :class="$style.status"
                  />
                </div>
                Wilson Saris
              </div>
            </td>
            <td>
              <div :class="$style.rating">
                4
                <UiIcon
                  icon="Star"
                  :class="$style.star"
                />
              </div>
            </td>
            <td>
              56
            </td>
            <td>
              <UiIcon
                icon="ArrowRight"
                :class="$style.arrow"
              />
            </td>
          </tr>
        </router-link>
        <router-link
          v-slot="{href, navigate}"
          custom
          to="/"
        >
          <tr
            :href="href"
            @click="navigate"
          >
            <td>
              <div :class="$style.name">
                <div :class="$style.avatar">
                  <UiAvatar
                    src="https://picsum.photos/100/100"
                    :size="36"
                  />
                  <UiIcon
                    icon="Active"
                    :class="$style.status"
                  />
                </div>
                Wilson Saris
              </div>
            </td>
            <td>
              <div :class="$style.rating">
                4
                <UiIcon
                  icon="Star"
                  :class="$style.star"
                />
              </div>
            </td>
            <td>
              56
            </td>
            <td>
              <UiIcon
                icon="ArrowRight"
                :class="$style.arrow"
              />
            </td>
          </tr>
        </router-link>
        <router-link
          v-slot="{href, navigate}"
          custom
          to="/"
        >
          <tr
            :href="href"
            @click="navigate"
          >
            <td>
              <div :class="$style.name">
                <div :class="$style.avatar">
                  <UiAvatar
                    src="https://picsum.photos/100/100"
                    :size="36"
                  />
                  <UiIcon
                    icon="Active"
                    :class="$style.status"
                  />
                </div>
                Wilson Saris
              </div>
            </td>
            <td>
              <div :class="$style.rating">
                4
                <UiIcon
                  icon="Star"
                  :class="$style.star"
                />
              </div>
            </td>
            <td>
              56
            </td>
            <td>
              <UiIcon
                icon="ArrowRight"
                :class="$style.arrow"
              />
            </td>
          </tr>
        </router-link>
        <router-link
          v-slot="{href, navigate}"
          custom
          to="/"
        >
          <tr
            :href="href"
            @click="navigate"
          >
            <td>
              <div :class="$style.name">
                <div :class="$style.avatar">
                  <UiAvatar
                    src="https://picsum.photos/100/100"
                    :size="36"
                  />
                  <UiIcon
                    icon="Active"
                    :class="$style.status"
                  />
                </div>
                Wilson Saris
              </div>
            </td>
            <td>
              <div :class="$style.rating">
                4
                <UiIcon
                  icon="Star"
                  :class="$style.star"
                />
              </div>
            </td>
            <td>
              56
            </td>
            <td>
              <UiIcon
                icon="ArrowRight"
                :class="$style.arrow"
              />
            </td>
          </tr>
        </router-link>
        <router-link
          v-slot="{href, navigate}"
          custom
          to="/"
        >
          <tr
            :href="href"
            @click="navigate"
          >
            <td>
              <div :class="$style.name">
                <div :class="$style.avatar">
                  <UiAvatar
                    src="https://picsum.photos/100/100"
                    :size="36"
                  />
                  <UiIcon
                    icon="Active"
                    :class="$style.status"
                  />
                </div>
                Wilson Saris
              </div>
            </td>
            <td>
              <div :class="$style.rating">
                4
                <UiIcon
                  icon="Star"
                  :class="$style.star"
                />
              </div>
            </td>
            <td>
              56
            </td>
            <td>
              <UiIcon
                icon="ArrowRight"
                :class="$style.arrow"
              />
            </td>
          </tr>
        </router-link>
      </tbody>
    </table>
  </UiContainer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import UiTagButton from "../Ui/TagButton/TagButton.vue";
import UiContainer from "../Ui/Container/Container.vue";
import UiContainerHeader from "../Ui/ContainerHeader/ContainerHeader.vue";
import UiTable from "../Ui/Table/Table.vue";
import UiIcon from "../Ui/Icon/Icon.vue";
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

.table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 rem(20px);
  margin: rem(-10px) 0;

  th, td {
    padding: rem(8px);
    vertical-align: middle;
    text-align: left;
  }

  th {
    font-weight: 700;
    font-size: rem(10px);
    line-height: rem(12px);
    color: var(--black);
  }

  td {
    transition: 200ms ease-in-out;
  }

  tr {

    &:not(:last-child) {

      td {
        border-bottom: 1px solid #EAEEF1;
      }
    }

    td {
      &:first-child {
        border-bottom-left-radius: rem(8px);
        border-top-left-radius: rem(8px);
      }

      &:last-child {
        border-bottom-right-radius: rem(8px);
        border-top-right-radius: rem(8px);
      }
    }

    &:hover td {
      background: #F8F8F8;
    }
  }

  tbody {
    font-weight: 600;
    font-size: rem(12px);
    line-height: rem(16px);

    tr {
      cursor: pointer;
    }
  }
}

.avatar {
  position: relative;
  display: inline-flex;
  margin-right: 8px;
}

.status {
  width: rem(17px);
  height: rem(17px);

  position: absolute;
  bottom: rem(-3px);
  right: rem(-3px);
  z-index: 1;
}

.rating {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.star {
  width: rem(16px);
  height: rem(16px);
  margin-left: rem(8px);
}

.arrow {
  width: rem(16px);
  height: rem(16px);
}

.name {
  display: inline-flex;
  align-items: center;
}
</style>
