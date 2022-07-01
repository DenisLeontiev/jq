<template>
  <UiContainer
    variant="outside"
    :class="$style.container"
  >
    <UiBreadcrumbs
      :items="breadcrumbs"
      :class="$style.breadcrumbs"
    />

    <UiContainer :class="[$style.cell, $style.headPanel]">
      <div :class="$style.headPanel__topLeft">
        <UiAvatar
          src="https://picsum.photos/300/300"
          :size="200"
          :class="$style.avatar"
        />

        <div :class="$style.headPanel__stars">
          <UiIcon
            icon="Star"
            :class="$style.headPanel__star"
          />
          <UiIcon
            icon="Star"
            :class="$style.headPanel__star"
          />
          <UiIcon
            icon="Star"
            :class="$style.headPanel__star"
          />
          <UiIcon
            icon="Star"
            :class="$style.headPanel__star"
          />
          <UiIcon
            icon="StarEmpty"
            :class="$style.headPanel__star"
          />
        </div>

        <div :class="$style.headPanel__statsInfo">
          <div :class="$style.headPanel__statsReview">
            4,1 / 5
          </div>
          <UiIcon
            icon="LvlUp"
            :class="$style.level"
          />
          <div :class="$style.headPanel__statsPercent">
            +0,4%
          </div>
          than last week
        </div>

        <div :class="$style.headPanel__title">
          Healthy burger
        </div>
        <div :class="$style.headPanel__location">
          <UiIcon
            icon="Pin"
            :class="$style.headPanel__locationSvg"
          />
          Dubai, Park View Tower
        </div>
        <div :class="$style.headPanel__members">
          36 сотрудников
        </div>
      </div>

      <div :class="$style.headPanel__topRight">
        <UiSelect
          v-model="periodValue"
          append-icon="Chevrondown"
          :options="period"
          :custom-icon="true"
          :class="$style.period"
        />

        <div :class="$style.totalStats">
          <div :class="$style.totalStat">
            <div :class="$style.totalStat__title">
              Общая сумма чаевых
            </div>
            <div :class="$style.totalStat__value">
              220 000 AED
            </div>
            <div :class="$style.headPanel__statsInfo">
              <UiIcon
                icon="LvlUp"
                :class="$style.level"
              />
              <div :class="$style.headPanel__statsPercent">
                +0,55%
              </div>
              than last week
            </div>
          </div>
          <div :class="$style.totalStat">
            <div :class="$style.totalStat__title">
              Средний размер чаевых
            </div>
            <div :class="$style.totalStat__value">
              500 AED
            </div>
            <div :class="$style.headPanel__statsInfo">
              <UiIcon
                icon="LvlDown"
                :class="$style.level"
              />
              <div :class="[$style.headPanel__statsPercent, $style.minus]">
                +1,42%
              </div>
              than last week
            </div>
          </div>
          <div :class="$style.totalStat">
            <div :class="$style.totalStat__title">
              Средний процент чаевых
            </div>
            <div :class="$style.totalStat__value">
              20 %
            </div>
            <div :class="$style.headPanel__statsInfo">
              <UiIcon
                icon="LvlUp"
                :class="$style.level"
              />
              <div :class="$style.headPanel__statsPercent">
                +25,44%
              </div>
              than last week
            </div>
          </div>
        </div>

        <div :class="$style.graphTitle">
          Статистика за последние 7 дней
        </div>

        <div :class="$style.graphLegends">
          <div
            v-for="(item, idx) in testData.datasets"
            :key="idx"
            :class="$style.graphLegend"
          >
            <div
              :class="$style.graphLegend__color"
              :style="`background: ${item.backgroundColor}`"
            />
            {{ item.label }}
          </div>
        </div>

        <BarChart v-bind="barChartProps" />
      </div>

      <div :class="[$style.headPanel__bottom, $style.statsByRules]">
        <div :class="$style.statsByRule">
          <div :class="$style.statsByRule__title">
            Kitchen
          </div>
          <div :class="$style.statsByRule__info">
            <UiIcon
              icon="Kitchen"
              :class="$style.statsByRule__svg"
            />
            <div :class="$style.statsByRule__values">
              <div :class="$style.statsByRule__value">
                <div :class="$style.statsByRule__emoji">😍</div>
                160
              </div>
              <div :class="$style.statsByRule__value">
                <div :class="$style.statsByRule__emoji">😐</div>
                40
              </div>
            </div>
            <div
              :class="$style.pie"
              style="--p:90;--c:var(--green)"
            >
              <div :class="$style.pie__value">90%</div>
              <div :class="$style.pie__text">positive</div>
              positive
            </div>
          </div>
        </div>

        <div :class="$style.statsByRule">
          <div :class="$style.statsByRule__title">
            Kitchen
          </div>
          <div :class="$style.statsByRule__info">
            <UiIcon
              icon="Kitchen"
              :class="$style.statsByRule__svg"
            />
            <div :class="$style.statsByRule__values">
              <div :class="$style.statsByRule__value">
                <div :class="$style.statsByRule__emoji">😍</div>
                160
              </div>
              <div :class="$style.statsByRule__value">
                <div :class="$style.statsByRule__emoji">😐</div>
                40
              </div>
            </div>
            <div
              :class="$style.pie"
              style="--p:90;--c:var(--green)"
            >
              <div :class="$style.pie__value">90%</div>
              <div :class="$style.pie__text">positive</div>
              positive
            </div>
          </div>
        </div>

        <div :class="$style.statsByRule">
          <div :class="$style.statsByRule__title">
            Kitchen
          </div>
          <div :class="$style.statsByRule__info">
            <UiIcon
              icon="Kitchen"
              :class="$style.statsByRule__svg"
            />
            <div :class="$style.statsByRule__values">
              <div :class="$style.statsByRule__value">
                <div :class="$style.statsByRule__emoji">😍</div>
                160
              </div>
              <div :class="$style.statsByRule__value">
                <div :class="$style.statsByRule__emoji">😐</div>
                40
              </div>
            </div>
            <div
              :class="$style.pie"
              style="--p:90;--c:var(--green)"
            >
              <div :class="$style.pie__value">90%</div>
              <div :class="$style.pie__text">positive</div>
              positive
            </div>
          </div>
        </div>

        <div :class="$style.statsByRule">
          <div :class="$style.statsByRule__title">
            Kitchen
          </div>
          <div :class="$style.statsByRule__info">
            <UiIcon
              icon="Kitchen"
              :class="$style.statsByRule__svg"
            />
            <div :class="$style.statsByRule__values">
              <div :class="$style.statsByRule__value">
                <div :class="$style.statsByRule__emoji">😍</div>
                160
              </div>
              <div :class="$style.statsByRule__value">
                <div :class="$style.statsByRule__emoji">😐</div>
                40
              </div>
            </div>
            <div
              :class="$style.pie"
              style="--p:60;--c:#E24949;--gr:rgba(17, 187, 141, 0.1)"
            >
              <div :class="$style.pie__value">60%</div>
              <div :class="$style.pie__text">negative</div>
              negative
            </div>
          </div>
        </div>
      </div>
    </UiContainer>

    <Restaurants :class="[$style.cell, $style.topLeft]" />
    <Transactions :class="[$style.cell, $style.topRight]" />
    <UiContainer :class="[$style.cell, $style.bottom]">
      3
    </UiContainer>
  </UiContainer>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { BarChart, useBarChart } from "vue-chart-3";
import { Chart, registerables, ChartOptions } from "chart.js";
import UiContainer from "../components/Ui/Container/Container.vue";
import UiBreadcrumbs from "../components/Ui/breadcrumbs/breadcrumbs.vue";
import { BreadcrumbsItemProps } from "../components/Ui/Breadcrumbs";
import Restaurants from "../components/Restaurants/Restaurants.vue";
import Transactions from "../components/Transactions/Transactions.vue";
import UiAvatar from "../components/Ui/Avatar/Avatar.vue";
import { UiIcon } from "../components/Ui/Icon";
import { UiSelect } from "../components/Ui/Select";

const breadcrumbs = ref<Array<BreadcrumbsItemProps>>(
  [{ title: "Главная", to: "/" }],
);

const period = [
  "За все время",
  "За 30 дней",
  "За 7 дней",
];
const periodValue = ref<string>(period[0]);

Chart.register(...registerables);
const testData = {
  labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
  datasets: [
    {
      label: "сумма чаевых",
      data: [12, 34, 54, 11, 2, 13, 10],
      backgroundColor: "#E6DDF6",
    }, {
      label: "% чаевых от чека",
      data: [24, 42, 71, 12, 4, 22, 17],
      backgroundColor: "#694BDB",
    },
  ],
};
const options = computed<ChartOptions<"bar">>(() => ({
  plugins: {
    legend: false,
  },
}));

const { barChartProps } = useBarChart({
  chartData: testData,
  options,
});
</script>

<style lang="scss" module>
@import "../assets/utils";

.statsByRules {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: rem(20px);
  margin: rem(28px) 0 0 0;
}

.statsByRule {
  position: relative;
  max-width: rem(226px);
  padding: rem(8px);
  gap: rem(12px);
  margin: 0 auto;
  box-shadow: 0px rem(2px) rem(8px) rgba(0, 0, 0, 0.08);
  border-radius: rem(20px);

  &:hover {

    &::before {
      opacity: 1;
    }
  }

  &::before {
    content: '';
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: linear-gradient(90deg, rgba(131, 58, 180, 0.05) 0%,
           rgba(253, 29, 29, 0.05) 50%, rgba(252, 176, 69, 0.05) 100%);
    transition: 300ms ease-in-out;
  }

  &__title {
    margin: 0 0 rem(-10px) 0;
    font-weight: 700;
    font-size: rem(14px);
    line-height: rem(20px);
  }

  &__info {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 0 rem(12px);
  }

  &__svg {
    width: rem(56px);
    height: rem(56px);
    fill: transparent;
  }

  &__values {
    display: flex;
    gap: 0 rem(4px);
    font-weight: 600;
    font-size: rem(14px);
    line-height: rem(24px);
  }

  &__value {

    &:not(:nth-child(1)) {
      color: var(--red);
    }

    &:nth-child(1) {
      color: var(--green);
    }
  }

  &__emoji {
    margin: 0 0 rem(12px) 0;
    font-weight: 700;
    font-size: rem(20px);
    line-height: rem(24px);
  }
}

@property --p{
  syntax: '<number>';
  inherits: true;
  initial-value: 0;
}

.pie {
  --p: 1;
  --b: #{rem(8px)};
  --c:darkred;
  --w: #{rem(80px)};
  --gr: rgba(226, 73, 73, 0.1);
  width:var(--w);
  aspect-ratio:1;
  position:relative;
  display:inline-grid;
  place-content:center;
  text-align: center;
  font-size:25px;
  color: transparent;

  &::before,
  &::after {
    content:"";
    position:absolute;
    border-radius:50%;
  }

  &::before {
    inset:0;
    background:
      radial-gradient(farthest-side,var(--c) 98%,#0000) top/var(--b) var(--b) no-repeat,
      conic-gradient(var(--c) calc(var(--p)*1%),#0000 0);
    mask:radial-gradient(farthest-side,#0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));
    -webkit-mask:radial-gradient(farthest-side,#0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));
  }

  &:after {
    inset:calc(50% - var(--b)/2);
    background:var(--c);
    transform:rotate(calc(var(--p)*3.6deg)) translateY(calc(50% - var(--w)/2));
  }

  &__value {
    font-size: rem(16px);
    line-height: rem(20px);
    color: var(--black);
    padding-top: rem(12.5px);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100% - rem(16px));
      height: calc(100% - rem(16px));
      border: 8px solid var(--gr);
      border-radius: rem(80px);
    }
  }

  &__text {
    font-size: rem(10px);
    line-height: rem(12px);
    color: var(--black);
    margin: 0 0 rem(-12.5px) 0;
  }
}


.container {
  display: grid;
  grid-template-areas: "breadcrumbs breadcrumbs"
                       "headPanel headPanel"
                       "topLeft topRight"
                       "bottom bottom";
  gap: rem(40px);
}
.breadcrumbs {
  grid-area: breadcrumbs;
}

.avatar {
  margin: 0 auto rem(40px) auto;
}

.graphLegends {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 0 rem(16px) 0;
  gap: rem(40px);
  font-weight: 600;
  font-size: rem(12px);
  line-height: rem(16px);
}

.graphLegend {
  display: flex;
  align-items: center;
  gap: 0 rem(10px);

  &__color {
    flex-shrink: 0;
    width: rem(32px);
    height: rem(10px);
  }
}

.level {
  width: 16px;
  height: 16px;
  margin: 0 rem(8px) 0 0;
}

.totalStats {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0 20px;
  margin: 0 0 rem(28px) 0;
}

.graphTitle {
  margin: 0 0 rem(12px) 0;
  font-weight: 700;
  font-size: rem(14px);
  line-height: rem(20px);
}

.totalStat {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-weight: 700;
    font-size: rem(12px);
    line-height: rem(16px);
    color: var(--gray);
    margin: 0 0 rem(12px) 0;
  }

  &__value {
    margin: 0 0 rem(20px) 0;
    font-weight: 700;
    font-size: rem(20px);
    line-height: rem(24px);
  }

  &:not(:last-child) {
    border-right: 1px solid #EAEEF1;
  }
}

.headPanel {
  display: grid;
  grid-template-areas: "topLeft topRight topRight"
                       "bottom bottom bottom";

  &__topLeft {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: topLeft;
    padding: 0 rem(60px) 0 rem(20px);
  }

  &__topRight {
    display: flex;
    flex-direction: column;
    grid-area: topRight;
  }

  &__bottom {
    grid-area: bottom;
  }

  &__stars {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 rem(8px) 0;
  }

  &__star {
    width: rem(24px);
    height: rem(24px);
  }

  &__statsReview {
    font-size: rem(16px);
    font-weight: 700;
    color: var(--lilac);
    margin: 0 rem(13px) 0 0;
  }

  &__statsPercent {
    margin: 0 rem(4px) 0 0;
    font-size: rem(10px);
    line-height: rem(16px);
    font-weight: 600;

    &:not(.minus) {
      color: var(--green);
    }

    &.minus {
      color: var(--red);
    }
  }

  &__statsInfo {
    display: flex;
    align-items: flex-end;
    margin: 0 0 rem(16px) 0;
    font-weight: 600;
    font-size: rem(12px);
    line-height: rem(16px);
  }

  &__title {
    margin: 0 0 rem(8px) 0;
    font-weight: 700;
    font-size: rem(32px);
    line-height: rem(38px);
    color: var(--lilac-hover);
  }

  &__locationSvg {
    width: rem(16px);
    height: rem(16px);
    margin: 0 rem(12px) 0 0;
  }

  &__location {
    display: flex;
    align-items: center;
    margin: 0 0 rem(16px) 0;
    font-weight: 600;
    font-size: rem(12px);
    line-height: rem(16px);
    color: var(--gray);
  }
}

.period {
  margin: 0 0 rem(28px) auto;
  text-transform: uppercase;
}

.cell {

  &.headPanel {
    grid-area: headPanel;
    padding: rem(40px);
  }
  &.topLeft {
    grid-area: topLeft;
  }
  &.topRight {
    grid-area: topRight;
  }
  &.bottom {
    grid-area: bottom;
  }
}
</style>
