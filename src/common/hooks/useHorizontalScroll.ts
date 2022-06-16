import { Ref, watchEffect } from "vue";
import { useMobile } from "./useMobile";

export const useHorizontalScroll = (scrollContainer: Ref<HTMLElement | null>) => {
  const handleScroll = (event: WheelEvent) => {
    event.preventDefault();
    if (!scrollContainer.value) {
      return;
    }

    scrollContainer.value?.scrollTo({
      left: scrollContainer.value.scrollLeft + (event.deltaY / 2),
    });
  };

  const { isMobile } = useMobile();

  watchEffect((onCleanup) => {
    if (isMobile.value) {
      return;
    }
    scrollContainer.value?.addEventListener("wheel", handleScroll);

    onCleanup(() => {
      scrollContainer.value?.removeEventListener("wheel", handleScroll);
    });
  });
};
