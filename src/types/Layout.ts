import { Ref } from "vue";

export enum Theme {
    dark = "dark",
    light = "light"
}

export const themes = [
  Theme.light,
  Theme.dark,
];

export type RefablePick<
    T = { [key: string]: any },
    PickKeys = keyof T,
> = {
    [Key in keyof T]: Key extends PickKeys ? (T[Key] | Ref<T[Key]>) : T[Key]
}

type i = RefablePick<{
    a: string;
    b: boolean
}>
