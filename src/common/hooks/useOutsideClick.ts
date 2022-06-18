import {
  inject, InjectionKey, provide, watchEffect,
} from "vue";
import { isSSR } from "../utils";

export interface OutsideClickHandler {
  (event: MouseEvent): void;
}

export interface OutsideClickSubscriber {
  handler: OutsideClickHandler
}

export interface OutsideClickContext {
  add(handler: OutsideClickSubscriber): OutsideClickSubscriber;
  remove(handler: OutsideClickSubscriber): void;
}

export const outsideClickInjectionKey: InjectionKey<OutsideClickContext> = Symbol("outsideClick");

export const useOutsideClick = (handler: OutsideClickSubscriber) => {
  const { add, remove } = inject(outsideClickInjectionKey)!;

  watchEffect((onCleanup) => {
    add(handler);

    onCleanup(() => {
      remove(handler);
    });
  });
};

export const useOutsideClickContainer = () => {
  const handlers = new Set<OutsideClickSubscriber>();

  const add = (handler: OutsideClickSubscriber) => {
    handlers.add(handler);

    return handler;
  };

  const remove = (handler: OutsideClickSubscriber) => {
    handlers.delete(handler);
  };

  provide(outsideClickInjectionKey, {
    add,
    remove,
  });

  const handleClick = (event: MouseEvent) => {
    handlers.forEach(({ handler }) => {
      handler(event);
    });
  };

  if (!isSSR) {
    watchEffect((onCleanup) => {
      document.addEventListener("click", handleClick);

      onCleanup(() => {
        document.removeEventListener("click", handleClick);
      });
    });
  }
};
