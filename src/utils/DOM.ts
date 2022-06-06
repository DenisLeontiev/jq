import { filteredArray } from "./object";

// Get all parents that matches selector up to root one
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

// Copy to clipboard with or without modern feature
export const copyToClipboard = async (string: string, modern = false) => {
  const textarea = document.createElement("textarea");
  textarea.value = string;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  try {
    if (modern) {
      await navigator.clipboard.writeText(string);
    }
  } catch (e) {
    //
  }
};
