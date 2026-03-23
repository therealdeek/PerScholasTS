
export class NetworkError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number = 503) {
    super(message);
    this.name = "NetworkError";
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, NetworkError.prototype); 
  }
}

export class DataError extends Error {
  field?: string | undefined;

  constructor(message: string, field?: string) {
    super(message);
    this.name = "DataError";
    this.field = field;
    Object.setPrototypeOf(this, DataError.prototype);
  }
}

type Product = { id: number; name: string; price: number };
type Review = { reviewer: string; rating: number; comment: string };
type SalesReport = {
  totalSales: number;
  unitsSold: number;
  averagePrice: number;
};


export const fetchProductCatalog = (): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          { id: 1, name: "Laptop", price: 1200 },
          { id: 2, name: "Headphones", price: 200 },
          { id: 3, name: "Keyboard", price: 150 },
        ]);
      } else {
        reject(new NetworkError("Failed to fetch product catalog", 503));
      }
    }, 1000);
  });
};


export const fetchProductReviews = (productId: number): Promise<Review[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (productId <= 0) {
        reject(new DataError(`Invalid product ID: ${productId}`, "productId"));
        return;
      }
      if (Math.random() < 0.8) {
        resolve([
          { reviewer: "Alice", rating: 5, comment: "Excellent!" },
          { reviewer: "Bob", rating: 4, comment: "Very good." },
        ]);
      } else {
        reject(
          new NetworkError(
            `Failed to fetch reviews for product ID ${productId}`,
            503,
          ),
        );
      }
    }, 1500);
  });
};

export const fetchSalesReport = (): Promise<SalesReport> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve({ totalSales: 45000, unitsSold: 38, averagePrice: 1184 });
      } else {
        reject(new NetworkError("Failed to fetch sales report", 503));
      }
    }, 1000);
  });
};
