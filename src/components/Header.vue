<template>
  <div :class="$style.header">
    <LangSwitcher :class="$style.langSwitcher" />
    <UiButton to="add">Добавить сотрудника</UiButton>
  </div>
</template>

<script lang="ts" setup>
import LangSwitcher from "./LangSwitcher.vue";
import UiButton from "./Ui/Button/Button.vue";
</script>

<style lang="scss" module>
@import "../assets/utils";
.header {
  @extend %flex-end;
  height: rem(92px);
  padding-right: rem(36px);
}
.langSwitcher {
  margin-right: rem(32px);
}
</style>
