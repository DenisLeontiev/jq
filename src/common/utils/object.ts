import mapKeys from "lodash/mapKeys";
import camelCase from "lodash/camelCase";
import { isRef, Ref } from "vue";

export { default as deepMerge } from "deepmerge";
export { default as dotObject } from "dot-object";

export const filteredArray = <T>(
  source: Array<T | boolean | "" | undefined>,
): Array<T> => source.filter(Boolean) as Array<T>;

export const arrayFrom = <T>(value: T | Array<T>): Array<T> => (
  value instanceof Array ? value : [value]
);

export const camelCaseObject = <
    S extends Record<any, any>,
    R extends Record<any, any>
>(params: S): R => (
  mapKeys(params, (value, key) => camelCase(key)) as unknown as R
  );

export const getMaybeRef = <T>(maybeRef: T | Ref<T>) => (
  isRef(maybeRef) ? maybeRef.value as T : (maybeRef as T)
);
