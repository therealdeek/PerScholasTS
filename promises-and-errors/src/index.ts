import { fetchProductCatalog, fetchProductReviews, fetchSalesReport, NetworkError, DataError,} from "./apiSimulator.js";
import { retryPromise } from "./retryPromise.js";

const RETRIES = 3;
const RETRY_DELAY = 500; 

const runDashboard = () => {
  console.log("--- Dashboard loading ---");

  // Step 1: Fetch the product catalog (with retry)
  retryPromise(() => fetchProductCatalog(), RETRIES, RETRY_DELAY)
    .then((products) => {
      console.log("Products loaded:", products);

      // Step 2: For each product, fetch its reviews (chained Promises)
      const reviewPromises = products.map((product) =>
        retryPromise(
          () => fetchProductReviews(product.id),
          RETRIES,
          RETRY_DELAY,
        )
          .then((reviews) => {
            console.log(`Reviews for "${product.name}":`, reviews);
          })
          .catch((error) => {
            // Handle review errors per-product so one failure doesn't kill the rest
            if (error instanceof NetworkError) {
              console.error(
                `[NetworkError ${error.statusCode}] ${error.message}`,
              );
            } else if (error instanceof DataError) {
              console.error(
                `[DataError on field "${error.field}"] ${error.message}`,
              );
            } else {
              console.error("Unknown error fetching reviews:", error);
            }
          }),
      );

      // Wait for all review fetches to settle, then get the sales report
      return Promise.all(reviewPromises);
    })
    .then(() => {
      // Step 3: Fetch sales report after products + reviews are done
      return retryPromise(() => fetchSalesReport(), RETRIES, RETRY_DELAY);
    })
    .then((report) => {
      console.log("Sales report:", report);
    })
    .catch((error) => {
      // This catches any error that wasn't already handled above
      if (error instanceof NetworkError) {
        console.error(`[NetworkError ${error.statusCode}] ${error.message}`);
      } else if (error instanceof DataError) {
        console.error(`[DataError] ${error.message}`);
      } else {
        console.error("Unexpected error:", error);
      }
    })
    .finally(() => {
      // Runs regardless of success or failure
      console.log("--- All API calls attempted. Dashboard done. ---");
    });
};

runDashboard();
