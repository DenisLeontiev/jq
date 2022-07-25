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
          <th />
          <th>Raiting</th>
          <th>Feedback</th>
          <th>Amount</th>
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
                </div>
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
              <div :class="$style.feedback">
                <div :class="$style.feedback__props">
                  <UiIcon
                    icon="Burger"
                    :class="[$style.icon, $style.positive]"
                  />
                  <UiIcon
                    icon="Bow"
                    :class="[$style.icon, $style.negative]"
                  />
                  <UiIcon
                    icon="Water"
                    :class="[$style.icon]"
                  />
                  <UiIcon
                    icon="Heart"
                    :class="[$style.icon]"
                  />
                </div>
                <UiIcon
                  icon="Comment"
                  :class="[$style.icon, $style.commented]"
                />
              </div>
            </td>
            <td>
              <div :class="$style.amount">
                70 AED
                <div :class="$style.date">
                  <span :class="$style.time">
                    8:24 pm
                  </span>
                  20 Jul 22
                </div>
              </div>
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
                </div>
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
              <div :class="$style.feedback">
                <div :class="$style.feedback__props">
                  <UiIcon
                    icon="Burger"
                    :class="[$style.icon, $style.positive]"
                  />
                  <UiIcon
                    icon="Bow"
                    :class="[$style.icon, $style.negative]"
                  />
                  <UiIcon
                    icon="Water"
                    :class="[$style.icon]"
                  />
                  <UiIcon
                    icon="Heart"
                    :class="[$style.icon]"
                  />
                </div>
                <UiIcon
                  icon="Comment"
                  :class="[$style.icon, $style.commented]"
                />
              </div>
            </td>
            <td>
              <div :class="$style.amount">
                70 AED
                <div :class="$style.date">
                  <span :class="$style.time">
                    8:24 pm
                  </span>
                  20 Jul 22
                </div>
              </div>
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
                </div>
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
              <div :class="$style.feedback">
                <div :class="$style.feedback__props">
                  <UiIcon
                    icon="Burger"
                    :class="[$style.icon, $style.positive]"
                  />
                  <UiIcon
                    icon="Bow"
                    :class="[$style.icon, $style.negative]"
                  />
                  <UiIcon
                    icon="Water"
                    :class="[$style.icon]"
                  />
                  <UiIcon
                    icon="Heart"
                    :class="[$style.icon]"
                  />
                </div>
                <UiIcon
                  icon="Comment"
                  :class="[$style.icon, $style.commented]"
                />
              </div>
            </td>
            <td>
              <div :class="$style.amount">
                70 AED
                <div :class="$style.date">
                  <span :class="$style.time">
                    8:24 pm
                  </span>
                  20 Jul 22
                </div>
              </div>
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
                </div>
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
              <div :class="$style.feedback">
                <div :class="$style.feedback__props">
                  <UiIcon
                    icon="Burger"
                    :class="[$style.icon, $style.positive]"
                  />
                  <UiIcon
                    icon="Bow"
                    :class="[$style.icon, $style.negative]"
                  />
                  <UiIcon
                    icon="Water"
                    :class="[$style.icon]"
                  />
                  <UiIcon
                    icon="Heart"
                    :class="[$style.icon]"
                  />
                </div>
                <UiIcon
                  icon="Comment"
                  :class="[$style.icon, $style.commented]"
                />
              </div>
            </td>
            <td>
              <div :class="$style.amount">
                70 AED
                <div :class="$style.date">
                  <span :class="$style.time">
                    8:24 pm
                  </span>
                  20 Jul 22
                </div>
              </div>
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
                </div>
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
              <div :class="$style.feedback">
                <div :class="$style.feedback__props">
                  <UiIcon
                    icon="Burger"
                    :class="[$style.icon, $style.positive]"
                  />
                  <UiIcon
                    icon="Bow"
                    :class="[$style.icon, $style.negative]"
                  />
                  <UiIcon
                    icon="Water"
                    :class="[$style.icon]"
                  />
                  <UiIcon
                    icon="Heart"
                    :class="[$style.icon]"
                  />
                </div>
                <UiIcon
                  icon="Comment"
                  :class="[$style.icon, $style.commented]"
                />
              </div>
            </td>
            <td>
              <div :class="$style.amount">
                70 AED
                <div :class="$style.date">
                  <span :class="$style.time">
                    8:24 pm
                  </span>
                  20 Jul 22
                </div>
              </div>
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

.feedback {
    display: flex;
    align-items: center;

    &__props {
        display: flex;
        align-items: center;
        gap: 0 rem(4px);
        margin-right: rem(8px);
    }
}

.icon {

    &:not(.positive):not(.negative):not(.commented) svg {
        fill: #C6C6C6;
    }

    &.positive svg {
        fill: var(--green);
    }

    &.negative svg {
        fill: var(--red);
    }

    &.commented svg {
        fill: var(--lilac);
    }

    width: rem(16px);
    height: rem(16px);
}

.amount {
    display: flex;
    flex-direction: column;
    gap: rem(4px) 0;
}

.date {
    font-weight: 700;
    font-size: rem(10px);
    line-height: rem(12px);
    color: #7C868F;
}

.time {
    color: #9FA8B1;
}
</style>
