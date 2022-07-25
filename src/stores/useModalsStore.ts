import { defineComponent } from "vue";
import { defineStore } from "pinia";

export enum ModalConfigComponent {
    demo = "demo",
}

export interface ModalConfig {
    backdropCloseable?: boolean;
    closeable?: boolean;
    component: ModalConfigComponent;
    backdropComponent?: Record<string, any>
    params?: Record<string, any>
}

export interface ModalInstance extends ModalConfig {
    id: string;
}

export interface ModalComponentInstance extends Omit<ModalInstance, "component"> {
    component: ReturnType<typeof defineComponent>
}

export interface ModalsState {
    modals: Array<ModalInstance>;
}

export const useModalsStore = defineStore({
  id: "modals",
  state(): ModalsState {
    return {
      modals: [],
    };
  },
  actions: {
    showModal(modalConfig: ModalConfig): ModalInstance["id"] {
      const id = Math.random().toString(36).slice(2, 9);
      this.modals.push({
        backdropCloseable: true,
        closeable: true,
        ...modalConfig,
        id,
      });
      console.log("id", id);

      return id;
    },
    hideModalById(modalId: ModalInstance["id"]) {
      const index = this.modals.findIndex(({ id }) => id === modalId);

      if (index === -1) {
        return;
      }

      this.modals.splice(index, 1);
    },
  },
});
