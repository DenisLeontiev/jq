<template>
  <div :class="[$style.sidebar, isMinimize && $style.minimize]">
    <div :class="$style.card">
      <div :class="$style.logoWrapper">
        <UiLogo :class="$style.logo" />
      </div>
      <div :class="$style.avatarWrapper">
        <UiAvatar
          src="https://picsum.photos/300/300"
          :border="true"
          :class="$style.avatar"
        />
        <UiAvatar
          :size="46"
          text="All"
          :class="$style.subavatar"
        />
      </div>
      <div :class="$style.title">
        Константин Чижов
      </div>
      <SidebarSelect :class="$style.select" />
      <div :class="$style.list">
        <UiContact
          variant="Mapmarker"
          href="https://yandex.ru/maps/-/CCUJfCXo3A"
          label="143500 РФ г. Москва, ул. <br />Ленина 75"
          :disable="true"
          :class="$style.contact"
        />
      </div>
    </div>
    <SidebarNav :class="$style.nav" />
    <div
      :class="$style.resize"
      @click="setMinimize"
    >
      <UiIcon
        icon="Chevronleft"
        :class="$style.icon"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import UiLogo from "../Ui/Logo/Logo.vue";
import UiIcon from "../Ui/Icon/Icon.vue";
import UiAvatar from "../Ui/Avatar/Avatar.vue";
import UiContact from "../Ui/Contact/Contact.vue";
import SidebarSelect from "./SidebarSelect.vue";
import SidebarNav from "./SidebarNav.vue";

const isMinimize = ref(false);

const setMinimize = () => {
  isMinimize.value = !isMinimize.value;
};

</script>

<style lang="scss" module>
@import "../../assets/utils";
.sidebar {
  position: relative;

  border-right: 1px solid #EAEEF1 ;
  padding: rem(24px) 0 rem(24px) rem(36px);

  --sidebar-min-width: #{rem(284px)};
  min-width: var(--sidebar-min-width);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &.minimize {
    --sidebar-min-width: #{rem(108px)};

    .icon {
      transform: scale3d(-1, 1, 1);
    }
  }
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  padding-right: rem(8px);
}
.logoWrapper {
  width: rem(132px);
  height: rem(40px);

  margin-bottom: rem(44px);
}
.avatarWrapper {
  position: relative;
  margin-bottom: rem(18px);
}
.avatar {
}
.subavatar {
  position: absolute;
  right: rem(-6px);
  bottom: rem(-6px);
  z-index: 1;
}
.title {
  font-weight: 700;
  font-size: rem(16px);
  line-height: rem(24px);
  color: #030307;
  margin-bottom: rem(12px);
}
.select {
  font-weight: 700;
  font-size: rem(14px);
  line-height: rem(24px);
  background: linear-gradient(136.01deg, #5F00FF 17.98%, #BF00C0 69.81%, #FF008A 85.06%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.select {
  margin-bottom: rem(20px);
}
.contact {
  &:not(:last-child) {
    margin-bottom: rem(8px);
  }
}
.nav {
  margin-top: rem(40px);
}
.resize {
  width: rem(24px);
  height: rem(24px);

  @extend %flex-center;

  border-radius: 50%;
  border: 1px solid #BDC6CF;
  background-color: white;

  position: absolute;
  top: rem(74px);
  right: 0;

  transition: background-color 0.2s;
  transform: translateX(50%);

  cursor: pointer;

  &:hover {
    background-color: #f0f2f5;
  }
}
.icon {
  color: #9FA8B1;

  width: rem(8px);
  height: rem(12px);

  transition: transform 0.2s;
  transform: scale3d(1, 1, 1);
}
</style>
