<template>
  <div :class="$style.app">
    <Button
      secondary="true"
    >
      test
    </Button>
  </div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Button from './components/Ui/Button/Button.vue';
</script>

<style lang="scss" module>
:root {
  font: 400 14px/18px 'RF Dewi Extended', sans-serif;

  --lilac: #5F00FF;
  --lilac-hover: #7500FF;
  --violet: #E6DDF6;
}

@import './assets/utils';
@import './assets/typography';

.app {

}
</style>
