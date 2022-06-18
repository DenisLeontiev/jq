<template>
  <div
    :class="$style.app"
    @teleportContainerMounted="setTeleportContainer"
  >
    <Sidebar :class="$style.sidebar" />
    <div :class="$style.page">
      <Header :class="$style.header" />
      <div :class="$style.view">
        <router-view />
      </div>
    </div>
    <div :class="$style.sprite">
      <IconsMap />
      <LogosMap />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconsMap from "./components/Ui/Icon/IconsMap.vue";
import LogosMap from "./components/Ui/Logo/LogosMap.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import Header from "./components/Header.vue";
import {
  useOutsideClickContainer, useTeleportContainer,
} from "./common";

useOutsideClickContainer();

const { setContainer: setTeleportContainer } = useTeleportContainer();
</script>

<style lang="scss" module>
:root {
  font: 400 16px 'RF Dewi Extended', sans-serif;

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
  width: 100vw;
  height: 100vh;
  display: flex;
}
.sidebar {
}
</style>
