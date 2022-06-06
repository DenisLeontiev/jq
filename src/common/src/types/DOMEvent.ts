export interface TypedFocusEvent<T = HTMLElement, RT = HTMLElement> extends Omit<FocusEvent, "relatedTarget" | "target"> {
    relatedTarget: RT
    target: T
}

export interface TypedMouseEvent<T = HTMLElement> extends Omit<MouseEvent, "target"> {
    target: T
}
