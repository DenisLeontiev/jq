/* import { Composer, useI18n as coreUseI18n } from "vue-i18n";
import { Optional } from "../types";

type I18n = Composer;
type I18nT = Parameters<I18n["t"]>;
type I18nTParams = I18nT extends [a: I18nT[0], ...rest: infer S] ? Optional<S> : never
type I18nTValue = I18nT[0]

export const useI18n = (prefix?: string) => {
  const i18n = coreUseI18n();
  const coreT = i18n.t.bind(i18n);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const t = (path: I18nTValue, ...args: I18nTParams) => coreT(`${prefix ? `${prefix}.` : ""}${path}`, ...args);
  return {
    i18n,
    t,
  };
}; */
