import { Ref, watch } from "vue";

export const useImagePreloader = (
  src: Ref<any>,
  setLoading: (loading: boolean) => void,
  setError: (error: string | null) => void,
  checkIfLoaded: () => boolean,
) => {
  const onLoadStart = () => {
    setError(null);
    setLoading(true);
  };
  const onLoaded = () => {
    setLoading(false);
  };
  const onError = (error: string | null) => {
    setError(error);
    setLoading(false);
  };

  watch(src, () => {
    setLoading(!checkIfLoaded());
  }, {
    immediate: true,
    deep: true,
  });

  return {
    onLoadStart,
    onLoaded,
    onError,
  };
};
