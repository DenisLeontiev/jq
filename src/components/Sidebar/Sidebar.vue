<template>
  <div :class="$style.sidebar">
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
          :border="true"
          :class="$style.subavatar"
        />
      </div>
      <div :class="$style.title">
        Константин Чижов
      </div>
      <SidebarSelect :class="$style.select" />
      <div :class="$style.list">
        <UiContact
          variant="Email"
          href="mailto:curtis.we@example.com"
          label="curtis.we@example.com"
          :class="$style.contact"
        />
        <UiContact
          variant="Phone"
          href="tel:86035550123"
          label="(603) 555-0123"
          :class="$style.contact"
        />
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
  </div>
</template>

<script lang="ts" setup>
import UiLogo from "../Ui/Logo/Logo.vue";
import UiAvatar from "../Ui/Avatar/Avatar.vue";
import UiContact from "../Ui/Contact/Contact.vue";
import SidebarSelect from "./SidebarSelect.vue";
import SidebarNav from "./SidebarNav.vue";

</script>

<style lang="scss" module>
@import "../../assets/utils";
.sidebar {
  border-right: 1px solid #EAEEF1 ;
  padding: rem(24px) 0 rem(24px) rem(36px);

  width: rem(284px);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
  width: rem(43px);
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
  margin-bottom: rem(48px);
}
.contact {
  &:not(:last-child) {
    margin-bottom: rem(8px);
  }
}
.nav {
  margin-top: rem(20px);
}
</style>
