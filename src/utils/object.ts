import { isRef, Ref } from "vue";

// Converts argument into array or returns array if it's array
export const arrayFrom = <T, U = T>(source: T | Array<T>, map?: (item: T) => U) => {
  const arraySource = source instanceof Array ? source : [source];

  return map ? arraySource.map(map) : arraySource;
};

// Converts 'dot.notation.view' to {dot: {notation: {view: 'value'}}} = 'value'
export const getDotNotated = <T>(source: T, path: string) => (
  path.split(".").reduce((acc, cur) => (acc as any)[cur], source)
);

// Filters array by Boolean
export const filteredArray = <T>(
  source: Array<T | boolean | "">,
): Array<T> => source.filter(Boolean) as Array<T>;

export const camelCasenObjectProps = (source: Record<any, any>) => (
  Object.entries(source).reduce((acc, [field, value]) => ({
    ...acc,
    [field.replace(/([-_]\w)/g, (s) => s.toUpperCase().replace(/[-_]/, ""))]: value,
  }), {})
);

export const getMaybeRef = <T>(maybeRef: T | Ref<T>) => (
  isRef(maybeRef) ? maybeRef.value as T : (maybeRef as T)
);
