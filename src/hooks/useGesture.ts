import { ref, Ref, watchEffect } from "vue";
import { OptionalRef } from "../../src/types";

export interface VerticalPanParams {
    triggerDelta: number | ((targetElement: HTMLElement) => number);
    triggerHandler?: () => void;
    direction: number;
}

export const usePan = (
  target: OptionalRef<HTMLElement>,
  {
    triggerDelta = 300,
    triggerHandler,
    direction = 24,
  }: Partial<VerticalPanParams> = {},
  flag?: Ref<boolean>,
) => {
  const delta = ref(0);
  const panning = ref(false);

  watchEffect(async (onInvalidate) => {
    if (!target.value) {
      return;
    }
    if (flag && !flag.value) {
      return;
    }
    const Hammer = await import("hammerjs");

    const computedTriggerDelta = triggerDelta instanceof Function
      ? triggerDelta(target.value)
      : triggerDelta;

    let resizeObserver: ResizeObserver | null;

    if (triggerDelta instanceof Function) {
      resizeObserver = new ResizeObserver(() => {
        triggerDelta(target.value!);
      });
      resizeObserver.observe(target.value);
    }

    let hammer: HammerManager | null = new Hammer.Manager(target.value);
    hammer.add(new Hammer.Pan({
      direction,
      threshold: 0,
    }));

    hammer.on("panstart", () => {
      panning.value = true;
    });

    if (direction === Hammer.DIRECTION_VERTICAL) {
      hammer.on("pandown panup", (event) => {
        delta.value = event.deltaY;
      });
    }

    if (direction === Hammer.DIRECTION_HORIZONTAL) {
      hammer.on("panleft panright", (event) => {
        delta.value = event.deltaX;
      });
    }

    hammer.on("panend", () => {
      panning.value = false;
      if (Math.abs(delta.value) > computedTriggerDelta) {
        if (triggerHandler) {
          triggerHandler();
        }
      } else {
        delta.value = 0;
      }
    });

    hammer.on("pancancel", () => {
      delta.value = 0;
      panning.value = false;
    });

    onInvalidate(() => {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
      if (hammer) {
        hammer.destroy();
        hammer = null;
      }
    });
  });

  return {
    delta,
    panning,
  };
};
