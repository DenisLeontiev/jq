import { defineStory, defineStoryMeta, StoryType } from "../../utils/storiesHelper";
import {
  DialogProps, dialogVariants,
  UiDialog,
} from "./index";

export default defineStoryMeta<DialogProps>(
  StoryType.component,
  "Dialog",
  UiDialog,
  {
    argTypes: {
      variant: {
        control: "select",
        options: [null, ...dialogVariants],
      },
      closeable: { control: "boolean" },
      returnable: { control: "boolean" },
    },
    args: {
      style: {
        width: "600px",
      },
    },
  },
);

export const Default = defineStory<DialogProps>("Dialog", UiDialog);
