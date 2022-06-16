import { Ref } from "vue";

export type Optional<Source> = {
    [key in keyof Source]?: Source[key]
}

export type OptionalRef<T> = Ref<T | undefined>

export type RefablePick<
    T = { [key: string]: any },
    PickKeys = keyof T,
    > = {
    [Key in keyof T]: Key extends PickKeys ? (T[Key] | Ref<T[Key]>) : T[Key]
}
