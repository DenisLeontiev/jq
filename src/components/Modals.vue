<template>
  <Teleport
    v-if="modals && teleportKey"
    :to="teleportKey"
  >
    <UiModal
      v-for="modal in modals"
      :key="modal.id"
      :closeable="modal.backdropCloseable"
      :state="isMobile ? 'bottom' : 'center'"
      :class="$style.modals"
    >
      <UiDialog
        :state="isMobile ? 'stacked' : 'default'"
        :closeable="modal.closeable"
        :close-button="!isMobile"
        @close="hideModalById(modal.id)"
      >
        <component
          :is="modal.component"
          v-bind="modal.params"
          @close="hideModalById(modal.id)"
        />
      </UiDialog>
    </UiModal>
  </Teleport>
</template>

<script lang="ts" setup>
import { computed, watchEffect } from "vue";
import { isSSR, useMobile, useTeleport } from "../common";

import UiModal from "./Ui/Modal/Modal.vue";
import UiDialog from "./Ui/Dialog/Dialog.vue";
import { ModalComponentInstance, ModalConfigComponent, useModalsStore } from "../stores";
import Demo from "./Modals/Demo.vue";

const { isMobile } = useMobile();

const modalsStore = useModalsStore();

const modals = computed<Array<ModalComponentInstance>>(() => modalsStore.modals.map((modal) => ({
  ...modal,
  component: {
    [ModalConfigComponent.demo]: Demo,
  }[modal.component] as any,
})));

console.log('modals', modals);

const teleportKey = computed(() => useTeleport().value ?? null);

const hideModalById = modalsStore.hideModalById.bind(modalsStore);

if (!isSSR) {
  const modalsCount = computed(() => modalsStore.modals.length);
  watchEffect(() => {
    if (modalsCount.value > 0) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }
  });
}
</script>

<style lang="scss" module>
@import "../assets/utils";
.modals {
  height: calc(var(--vh) * 100);
}
</style>
