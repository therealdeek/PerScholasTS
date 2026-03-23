export const retryPromise = <T>(
  fn: () => Promise<T>, // the async function to try
  retries: number, // how many attempts remain
  delay: number, // ms to wait between attempts
): Promise<T> => {
  return fn().catch((error) => {
    if (retries <= 0) {
      // No more chances — pass the error up the chain
      return Promise.reject(error);
    }

    console.log(
      `Attempt failed. Retrying in ${delay}ms... (${retries} retries left)`,
    );

    // Wait, then recurse with one fewer retry
    return new Promise<T>((resolve, reject) => {
      setTimeout(() => {
        retryPromise(fn, retries - 1, delay)
          .then(resolve)
          .catch(reject);
      }, delay);
    });
  });
};
