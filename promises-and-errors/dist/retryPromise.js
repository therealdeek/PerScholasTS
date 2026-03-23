export const retryPromise = (fn, // the async function to try
retries, // how many attempts remain
delay) => {
    return fn().catch((error) => {
        if (retries <= 0) {
            // No more chances — pass the error up the chain
            return Promise.reject(error);
        }
        console.log(`Attempt failed. Retrying in ${delay}ms... (${retries} retries left)`);
        // Wait, then recurse with one fewer retry
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                retryPromise(fn, retries - 1, delay)
                    .then(resolve)
                    .catch(reject);
            }, delay);
        });
    });
};
//# sourceMappingURL=retryPromise.js.map