import {
  inject,
  InjectionKey,
  provide, ref, watchEffect,
} from "vue";
import {
  getAllClosest, getMaybeRef, isSSR, OptionalRef, RefablePick,
} from "../../common";

export enum PopupPosition {
  top = "top",
  center = "center",
  bottom = "bottom",
  left = "left",
  right = "right",
}

export enum PopupAlign {
  start = "start",
  center = "center",
  end = "end",
  stretch = "stretch",
}

export type UsePopupParams = RefablePick<{
  position: PopupPosition;
  align: PopupAlign;
  flag: boolean | null;
  sticky: boolean;
  stickyOffset: number;
  offset: number;
  otherOffset: number;
}>

export interface PopupInstance {
  calc(): void;
  popup: HTMLElement;
  target: HTMLElement;
}

export type PopupContainer = {
  add(popup: PopupInstance): PopupInstance;
  remove(popup: PopupInstance): void;
}

export interface PopupBounds {
  top: number;
  left: number;
  width: number;
  height: number;
}

export const popupsInjectionKey: InjectionKey<PopupContainer | null> = Symbol("popups");

export const usePopupContainer = () => {
  const popups = new Set<PopupInstance>();

  provide(popupsInjectionKey, {
    add(popup) {
      popups.add(popup);

      popup.calc();

      return popup;
    },
    remove(popup) {
      popups.delete(popup);
    },
  });

  const calc = () => {
    popups.forEach((popup) => {
      popup.calc();
    });
  };

  if (isSSR) {
    return;
  }

  watchEffect((onInvalidate) => {
    window.addEventListener("resize", calc);
    window.addEventListener("orientationchange", calc);
    window.addEventListener("focus", calc);

    onInvalidate(() => {
      window.removeEventListener("resize", calc);
      window.removeEventListener("orientationchange", calc);
      window.removeEventListener("focus", calc);
    });
  });
};

export const usePopup = (
  target: OptionalRef<HTMLElement>,
  popup: OptionalRef<HTMLElement>,
  {
    position = PopupPosition.bottom,
    align = PopupAlign.stretch,
    flag = null,
    sticky = true,
    offset = 0,
    otherOffset = 0,
    stickyOffset = 0,
  }: Partial<UsePopupParams> = {},
) => {
  const popups = inject(popupsInjectionKey, null);

  const popupBounds = ref<PopupBounds>({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  watchEffect((onInvalidate) => {
    if (!getMaybeRef(flag)) {
      return;
    }
    if (!popups) {
      return;
    }
    if (!target.value) {
      return;
    }

    if (!popup.value) {
      return;
    }

    const computedPosition = getMaybeRef(position);
    const computedAlign = getMaybeRef(align);
    const computedOffset = getMaybeRef(offset);
    const computedOtherOffset = getMaybeRef(otherOffset);
    const computedStickyOffset = getMaybeRef(stickyOffset);

    const calc = () => {
      if (!target.value) {
        return;
      }
      if (!popup.value) {
        return;
      }

      const {
        top: targetTop,
        left: targetLeft,
        width: targetWidth,
        height: targetHeight,
      } = target.value.getBoundingClientRect();
      const {
        clientWidth: popupWidth,
        clientHeight: popupHeight,
      } = popup.value;

      let top = targetTop;
      let left = targetLeft;
      let width = 0;
      let height = 0;

      const isX = [
        PopupPosition.top,
        PopupPosition.center,
        PopupPosition.bottom,
      ].includes(computedPosition);

      if (isX) {
        if (computedAlign === PopupAlign.start) {
          left += 0;
        } else if (computedAlign === PopupAlign.center) {
          left += (targetWidth - popupWidth) / 2;
        } else if (computedAlign === PopupAlign.end) {
          left += targetWidth - popupWidth;
        } else if (computedAlign === PopupAlign.stretch) {
          width = targetWidth;
        }
      } else if (computedAlign === PopupAlign.start) {
        top += 0;
      } else if (computedAlign === PopupAlign.center) {
        top += (targetHeight - popupHeight) / 2;
      } else if (computedAlign === PopupAlign.end) {
        top += targetHeight - popupHeight;
      } else if (computedAlign === PopupAlign.stretch) {
        height = targetHeight;
      }

      if (computedPosition === PopupPosition.top) {
        top -= popupHeight;
      } else if (computedPosition === PopupPosition.center) {
        top += (targetHeight - popupHeight) / 2;
      } else if (computedPosition === PopupPosition.bottom) {
        top += targetHeight;
      } else if (computedPosition === PopupPosition.left) {
        left -= popupWidth;
      } else if (computedPosition === PopupPosition.right) {
        left += targetWidth;
      }

      if (isX) {
        top += computedOffset;
        left += computedOtherOffset;
      } else {
        left += computedOffset;
        top += computedOtherOffset;
      }

      if (getMaybeRef(sticky)) {
        const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
        if ((left + width) > (windowWidth - computedStickyOffset)) {
          left = windowWidth - width - computedStickyOffset;
        }
        if ((left) < computedStickyOffset) {
          left = computedStickyOffset;
        }
        const computedHeight = (height === 0 ? popupHeight : height);
        if ((top + computedHeight) > (windowHeight - computedStickyOffset)) {
          top = windowHeight - computedHeight - computedStickyOffset;
        }
        if ((top) < computedStickyOffset) {
          top = computedStickyOffset;
        }
      }

      popupBounds.value.top = top;
      popupBounds.value.left = left;
      popupBounds.value.width = width;
      popupBounds.value.height = height;
    };

    const popupInstance = popups.add({
      popup: popup.value,
      target: target.value,
      calc,
    });

    const parents = getAllClosest(target.value, "[data-scrollable]");

    parents.forEach((parent) => {
      parent.addEventListener("scroll", calc);
    });

    onInvalidate(() => {
      popups.remove(popupInstance);

      parents.forEach((parent) => {
        parent.removeEventListener("scroll", calc);
      });
    });
  });

  return {
    popupBounds,
  };
};
