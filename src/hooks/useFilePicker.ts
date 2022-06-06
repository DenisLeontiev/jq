import {
  onBeforeUnmount, ref, watchEffect, Ref,
} from "vue";
import { RefablePick } from "../../src/types";
import { getMaybeRef, isSSR } from "../utils";

export interface FilePickerParams {
    accept: string[];
    multiple: boolean;
}

export interface FilePickerResponse {
  file: Ref<File>
  files: Ref<Array<File>>
  showFileSelector: () => void
}

export const useFilePicker = ({
  accept = [],
  multiple = false,
}: Partial<RefablePick<FilePickerParams>> = {}) => {
  const file = ref<File | null>(null);
  const files = ref<Array<File>>([]);

  let showFileSelector: () => void;

  if (!isSSR) {
    const input = document.createElement("input");
    input.type = "file";

    input.addEventListener("change", () => {
      if (!input.files) {
        return;
      }
      files.value = Array.from(input.files || []);
      file.value = input.files ? (input.files[0] || null) : null;
      input.value = "";
    });

    watchEffect(() => {
      input.accept = getMaybeRef(accept).join(",");
      input.multiple = getMaybeRef(multiple);
    });

    onBeforeUnmount(() => {
      input.remove();
    });

    showFileSelector = () => {
      input.click();
    };
  } else {
    showFileSelector = () => {

    };
  }

  return {
    file,
    files,
    showFileSelector,
  };
};
