type CancellableTimeoutPromise<T> = Promise<T> & {
  cancel: () => void
}

export const awaitTimeout = <T = any>(
  duration = 1000,
  returnal: T = true as unknown as T,
): CancellableTimeoutPromise<T> => {
  let timeout: ReturnType<typeof setTimeout>;
  let forceResolve: () => void = () => {};
  const promise: CancellableTimeoutPromise<T> = new Promise<T>((resolve) => {
    timeout = setTimeout(resolve, duration);
    forceResolve = () => {
      clearTimeout(timeout);
      resolve(returnal);
    };
  }) as CancellableTimeoutPromise<T>;

  promise.cancel = forceResolve;

  return promise;
};
