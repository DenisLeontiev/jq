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
            x1="3.70096"
            y1="11.3211"
            x2="20.299"
            y2="11.3211"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F09819" />
            <stop
              offset="1"
              stop-color="#EDDE5D"
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

<style>
#bar-chart {
  height: 226px !important;
}
</style>

<style lang="scss" module>
:root {
  font: 400 16px 'RF Dewi Extended', sans-serif;

  --lilac: #5F00FF;
  --lilac-hover: #7500FF;
  --violet: #E6DDF6;
  --green: #11BB8D;
  --gray: #7C868F;

  --red: #E24949;
  --white: #fff;
  --black: #030307;

  --gradient: linear-gradient(136.01deg, #5F00FF 17.98%, #BF00C0 69.81%, #FF008A 85.06%);
}

@import './assets/utils';
@import './assets/normalize';
@import './assets/typography';

.sprite {
  position: absolute;
  z-index: -1;
  opacity: 0;
  visibility: hidden;
  user-select: none;
  pointer-events: none;
  width: 0;
  height: 0;
}
.app {
  display: flex;
  color: var(--black);
}
.page {
  flex-grow: 1;
}
</style>
