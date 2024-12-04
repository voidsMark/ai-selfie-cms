export const useUtils = () => ({
  // eslint-disable-next-line no-promise-executor-return
  sleep: (ms: number) => new Promise((resolve) => setTimeout(resolve, ms)),
})
