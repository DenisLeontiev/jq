<template>
  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
  </div>
  <router-view />
  <div :class="$style.app">
    <div :class="$style.sprite">
      <IconsMap />
    </div>

    <Checkbox 
      name="examp"
      label="label"
      :model-value="isFree"
    >
      <template #label>foo bar</template>
    </Checkbox>
    <Breadcrumbs
      :path="'/lohi'"
      :items="[{title: 'Главная', href: '' }, {title: 'Сотрудники', href: '/lohi' }]"
    />
    {{ route }}
    <Checkbox
      label="test"
    />
  </div>
</template>

<script setup lang="ts">
import IconsMap from "./components/Ui/Icon/IconsMap.vue";

import Checkbox from "./components/Ui/Checkbox/Checkbox.vue";
import Breadcrumbs from "./components/Ui/Breadcrumbs/Breadcrumbs.vue";
</script>

<style lang="scss" module>
:root {
  font: 400 14px/18px 'RF Dewi Extended', sans-serif;

  --lilac: #5F00FF;
  --lilac-hover: #7500FF;
  --violet: #E6DDF6;

  --gradient: linear-gradient(136.01deg, #5F00FF 17.98%, #BF00C0 69.81%, #FF008A 85.06%);
}

@import './assets/utils';
@import './assets/typography';
.sprite {
  display: none;
}
.app {

}
</style>
