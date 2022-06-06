import { clearIconName, filterIconName } from "./index";

export const iconNames = Object.keys(import.meta.glob("./assets/**/*.svg"))
  .map(clearIconName)
  .filter(filterIconName);
