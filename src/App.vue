<template>
  <Button>
    test
  </Button>
  <Input />
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Button from './components/Ui/Button/Button.vue';
import Input from './components/Ui/Input/Input.vue';
</script>

<style lang="scss">
@import './assets/typography';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
