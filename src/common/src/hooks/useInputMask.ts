import { watchEffect } from "vue";
import { OptionalRef } from "../types";

export const getPhoneInputmask = () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
  const Inputmask = require("inputmask").default;
  // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
  const InputmaskPhone = require("inputmask.phone");
  // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
  const InputmaskPhoneCodes = require("inputmask.phone/dist/inputmask.phone/phone-codes/phone");
  InputmaskPhone(Inputmask);
  InputmaskPhoneCodes(InputmaskPhone);

  return InputmaskPhoneCodes;
};

export const useInputMask = (
  input: OptionalRef<HTMLInputElement>,
  mask: OptionalRef<string>,
  inputmaskInstance?: any,
) => {
  let isValid: (value: string) => void = (value: string) => !!value;
  watchEffect(async (onInvalidate) => {
    if (!input.value) {
      return;
    }
    if (!mask.value) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
    const Constructor = inputmaskInstance || require("inputmask").default;

    isValid = Constructor.isValid.bind(Constructor);

    let instance = new Constructor(mask.value);

    instance.mask(input.value, {
      showMaskOnHover: false,
    });

    onInvalidate(() => {
      if (instance) {
        instance.remove();
      }
      instance = null;
    });
  });

  return {
    isValid,
  };
};
