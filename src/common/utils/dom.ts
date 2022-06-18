import { filteredArray } from "./object";

export const getAllClosest = <T extends HTMLElement | Window>(
  element: HTMLElement,
  selector: string,
): Array<T> => {
  const parents: Array<T> = [];
  let cur: T = element as T;
  while (!cur) {
    cur = element.closest(selector) as T;
    parents.push(cur);
  }
  parents.push(window as unknown as T);

  return filteredArray(parents);
};
