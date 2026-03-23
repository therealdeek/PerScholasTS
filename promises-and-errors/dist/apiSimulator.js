export class NetworkError extends Error {
    constructor(message, statusCode = 503) {
        super(message);
        this.name = "NetworkError";
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, NetworkError.prototype);
    }
}
export class DataError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "DataError";
        this.field = field;
        Object.setPrototypeOf(this, DataError.prototype);
    }
}
export const fetchProductCatalog = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                    { id: 3, name: "Keyboard", price: 150 },
                ]);
            }
            else {
                reject(new NetworkError("Failed to fetch product catalog", 503));
            }
        }, 1000);
    });
};
export const fetchProductReviews = (productId) => {
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
            }
            else {
                reject(new NetworkError(`Failed to fetch reviews for product ID ${productId}`, 503));
            }
        }, 1500);
    });
};
export const fetchSalesReport = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve({ totalSales: 45000, unitsSold: 38, averagePrice: 1184 });
            }
            else {
                reject(new NetworkError("Failed to fetch sales report", 503));
            }
        }, 1000);
    });
};
//# sourceMappingURL=apiSimulator.js.map