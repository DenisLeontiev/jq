<template>
  <div :class="$style.app">
    <div :class="$style.sprite">
      <IconsMap />
    </div>

    <Button
      variant="gradient"
      prependIcon="Like"
    >
      test
    </Button>

    <TagButtons>
      <TagButton 
        label="tag"
      />
      <TagButton 
        label="tag 2"
      />
    </TagButtons>
  </div>
</template>

<script setup lang="ts">
import Button from './components/Ui/Button/Button.vue';
import TagButtons from './components/Ui/TagButton/TagButtons.vue';
import TagButton from './components/Ui/TagButton/TagButton.vue';
import IconsMap from './components/Ui/Icon/IconsMap.vue';
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
