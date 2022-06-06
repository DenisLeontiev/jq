# List of hooks

1. [useErrors](./useErrors.ts) - hook that encapsulates error mapping and storing logic. Usage:
```typescript
import {useErrors} from "./useErrors";

const {
    errorsMap,
    setErrors,
    clearErrors,
    errors,
} = useErrors<'name' | 'username'> // uses generic argument for stricting possible fields

// Map of errors per field
console.log(errorsMap.value.name) // {name: ['error1', 'error2'], username: ['error1', 'error2']}

// Set errors (actually adds)
setErrors([
    ['name', 'error1'],
    ['name', 'error2'],
    ['username', 'error1'],
    ['username', 'error2'],
])

// Clear errors
clearErrors();

// Access to errors source set
console.log(errors.value) // [['name', 'error1'], ['name', 'error2'], ...etc]
```

2. [useFilePicker](./useFilePicker.ts) - hook that encapsulates file selecting logic. Usage:
```ts
import {useFilePicker} from "./useFilePicker";

const {
    file, // File proxy instance
    files, // Files array proxy instance
    showFileSelector, // Trigger native file selector
} = useFilePicker({
    accept: ['image/*'], // array of acceptable formats,
    mulitple: true,
});
```

3. [useGesture](./useGesture.ts) - hooks of user's gesture detecting. Currently contains only `usePan` function. 
   1. `usePan` - allows to determine pan gesture. Usage:
```ts
import {usePan} from "./useGesture";

const targetRef = ref<HTMLDivElement>()
const {
    delta, // current delta proxy value
    panning, // "is panning now" proxy
} = usePan(targetRef, {
    triggerDelta: 20, // How much pixels must be panned to trigger,
    triggerHandler: () => {}, // Callback after gesture complete,
    direction: 24, // 24 - vertical, 6 - horizontal
})
```

4. [useInputMask](./useInputMask.ts) - hook that allows to implement input mask. Usage
```typescript
import {useInputMask} from "./useInputMask";

const inputRef = ref<HTMLInputElement>();
const {
    isValid, // "is now valid" proxy
} = useInputMask(inputRef, '+7 (999) 999 99-99')
```

5. [useMobile](./useMobile.ts) - hooks of mobile context. Usage:
```typescript
import {useMobile, useMobileContext} from "./useMobile";

// Allows to declare context.
// Must be used in root node.
const {
   isMobile, // current value proxy
   setIsMobile, // update value
} = useMobileContext();

const isMobile = useMobile(); // current value proxy for context consumers
```

6. [useOutsideClick](./useOutsideClick.ts) - hook of outside click gesture. Usage:
```typescript
import {useOutsideClickContainer} from "./useOutsideClick";

// Allows to declare handlers container.
// Must be used in root node.
useOutsideClickContainer();

const targetRef = ref<HTMLElement>()
useOutsideClick(targetRef, () => {
    // do something if click is outside targetRef.value
})
```

7. [usePopup](./usePopup.ts) - allows to attach one element to other via root portal and scroll and intersection listeners. Usage:

```typescript
import {usePopup} from "./usePopup";

const targetRef = ref<HTMLElement>()
const popupRef = ref<HTMLElement>()
usePopup(
    targetRef,
    popupRef, {
           position, // see PopupPosition enum
           align, // see PopupAlign enum,
           flag, // ref(boolean) to trigger popup handler
           sticky, // stick to window border
           offset, // main axis offset
           otherOffset, // secondary axis offset,
           stickyOffset, // offset of window borders       
    }    
)
```

8. [useState](./useState.ts) - hooks that encapsulates state and its changing. Usage:
```typescript
import {useState} from "./useState";

const [
    value, // current value proxy
    setValue, // value updater
] = useState(true)

setValue(false);
```

9. [useTheme](./useTheme.ts) - hooks of theme context.

```typescript
import {useThemeContext, useTheme} from "./useTheme";

// Allows to declare context.
// Must be used in root node.
const {theme, setTheme} = useThemeContext()

//
const theme = useTheme(); // current value proxy for context consumers
```

10. [useToggle](./useToggle.ts) - hook of toggle value encapsulation. Usage:

```typescript
import {useToggle} from "./useToggle";

const [
   value,
   toggleValue,
   setValue,
   {
      show, // set to *true*
      hide // set to *false*
   }
] = useToggle(
    true, // default value
    true, // *true* value
    false // *false* value
)
```

11. [useVh](./useVh.ts) - hook for layouting workaround about window height. Usage:

```typescript
import {useVh} from "./useVh";

const {
    vh, // 1/100 of window height value proxy
} = useVh();
```