import {
  inject,
  InjectionKey,
  provide,
  watchEffect,
  isRef,
} from "vue";
import { OptionalRef, TypedMouseEvent } from "../../src/types";
import { isSSR } from "../utils";

type OutsideClickItem = {
  target: HTMLElement,
  handler: (e: TypedMouseEvent) => void
};

const outsideClickHandlerInjectionKey: InjectionKey<{
  add(item: OutsideClickItem): void;
  remove(item: OutsideClickItem["target"]): void;
}> = Symbol("outsideClickHandler");

export const useOutsideClickContainer = () => {
  const items = new Map<OutsideClickItem["target"], OutsideClickItem["handler"]>();

  const add = (item: OutsideClickItem) => {
    items.set(item.target, item.handler);
  };

  const remove = (target: OutsideClickItem["target"]) => {
    items.delete(target);
  };

  provide(outsideClickHandlerInjectionKey, {
    add,
    remove,
  });

  if (isSSR) {
    return;
  }
  watchEffect((onInvalidate) => {
    const listener = (event: TypedMouseEvent) => {
      items.forEach((handler, target) => {
        if (event.target === target || target.contains(event.target)) {
          return;
        }
        handler(event);
      });
    };
    document.addEventListener("mousedown", listener as any);

    onInvalidate(() => {
      document.removeEventListener("mousedown", listener as any);
    });
  });
};

export const useOutsideClick = (
  target: HTMLElement | OptionalRef<HTMLElement>,
  handler: (e: TypedMouseEvent) => void,
) => {
  const outsideClickHandler = inject(outsideClickHandlerInjectionKey, null);
  if (!outsideClickHandler) {
    return;
  }

  watchEffect(((onInvalidate) => {
    const targetItem = isRef(target) ? target.value : target;
    if (!targetItem) {
      return;
    }
    outsideClickHandler.add({ target: targetItem, handler });

    onInvalidate(() => {
      if (!targetItem) {
        return;
      }
      outsideClickHandler.remove(targetItem);
    });
  }));
};
