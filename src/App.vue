<template>
  <div :class="$style.app">
    <div :class="$style.sprite">
      <IconsMap />
    </div>
    <Input
        v-model="test"
        placeholder="asdasd"
        type="text"
        state="state"
        inputClass="inputClass"
        :rows="4"
        mask=""
        :autofocus="false"
        label="label"
        :disabled="false"
        :required="false"
    />

    <Checkbox
      label="test"
    />
  </div>
</template>

<script setup lang="ts">
import IconsMap from './components/Ui/Icon/IconsMap.vue';

import Chackbox from './components/Ui/Checkbox/Checkbox.vue';
let test = ''
import Input from "./components/Ui/Input/Input.vue";
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
