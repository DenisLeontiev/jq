<template>
  <UiContainer :class="$style.employeesBest">
    <div :class="$style.title">
      The best employees of the week
    </div>
    <div :class="$style.list">
      <EmployeesCard
        :class="$style.item"
        variant="maxReviews"
        :to="{ path: 'employees/testUser' }"
        src="https://picsum.photos/300/400"
        value="10"
        title="Ali Shamsi"
      />
      <EmployeesCard
        :class="$style.item"
        variant="bestRating"
        :to="{ path: 'employees/testUser' }"
        src="https://picsum.photos/400/400"
        value="5,0"
        title="Sara Curtis"
      />
      <EmployeesCard
        :class="$style.item"
        variant="maxTip"
        :to="{ path: 'employees/testUser' }"
        src="https://picsum.photos/300/300"
        value="10 AED"
        title="Ahmed Saris"
      />
    </div>
  </UiContainer>
</template>

<script lang="ts" setup>
import UiContainer from "../Ui/Container/Container.vue";
import EmployeesCard from "./EmployeesCard.vue";
</script>

<style lang="scss" module>
@import "../../assets/utils";
.employeesBest {
  @extend %flex-start;
  flex-direction: column;
}
.list {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.item {
  margin: 0 rem(30px);
}
.title {
  font-weight: 700;
  font-size: rem(16px);
  line-height: rem(24px);
  text-transform: uppercase;

  margin-bottom: rem(38px);

  background: linear-gradient(136.01deg, #5F00FF 17.98%, #BF00C0 69.81%, #FF008A 85.06%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
