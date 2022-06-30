<template>
  <div
    :class="$style.app"
    @teleportContainerMounted="setTeleportContainer"
  >
    <div :class="$style.sprite">
      <IconsMap />
      <LogosMap />
      <svg>
        <defs>
          <linearGradient
            id="paint0_linear_691_41649"
            x1="6.89372"
            y1="6.0246"
            x2="17.3682"
            y2="17.3254"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5F00FF" />
            <stop
              offset="0.772615"
              stop-color="#BF00C0"
            />
            <stop
              offset="1"
              stop-color="#FF008A"
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <Sidebar :class="$style.sidebar" />
    <div :class="$style.page">
      <Header :class="$style.header" />
      <div :class="$style.view">
        <router-view />
      </div>
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
  --green: #11BB8D;
  --gray: #8E8F91;

  --red: #E24949;

  --gradient: linear-gradient(136.01deg, #5F00FF 17.98%, #BF00C0 69.81%, #FF008A 85.06%);
}

@import './assets/utils';
@import './assets/typography';
.sprite {
  position: absolute;
  z-index: -1;
  opacity: 0;
  visibility: hidden;
  user-select: none;
  pointer-events: none;
}
.app {
  width: 100vw;
  height: 100vh;
  display: flex;
  color: #030307;
}
.page {
  flex-grow: 1;
}
</style>
