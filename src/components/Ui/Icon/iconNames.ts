import { clearIconName } from "./index";

export const iconNames = Object.keys(import.meta.glob("./assets/**/*.svg"))
  .map(clearIconName);
