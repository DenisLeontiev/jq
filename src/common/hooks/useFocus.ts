import { Ref } from "vue";
import { useState } from "./useState";

export const useFocus = (initialValue?: boolean, focusableRef?: Ref<HTMLElement | undefined>) => {
  const [focused, setFocused] = useState<boolean>(initialValue || false);

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
  };

  const focus = () => {
    focusableRef?.value?.focus();
  };

  const blur = () => {
    focusableRef?.value?.blur();
  };

  return {
    focused,
    onFocus,
    onBlur,
    focus,
    blur,
  };
};
