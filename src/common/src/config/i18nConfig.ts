import { I18nOptions } from "vue-i18n";
import { kkkNumber } from "../utils";

export const getI18nConfig = (): I18nOptions => ({
  modifiers: {
    kkkNumber: (value) => kkkNumber(parseFloat(value as string)),
  },
});
