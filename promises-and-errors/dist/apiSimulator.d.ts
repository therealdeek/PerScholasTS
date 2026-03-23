export declare class NetworkError extends Error {
    statusCode: number;
    constructor(message: string, statusCode?: number);
}
export declare class DataError extends Error {
    field?: string | undefined;
    constructor(message: string, field?: string);
}
type Product = {
    id: number;
    name: string;
    price: number;
};
type Review = {
    reviewer: string;
    rating: number;
    comment: string;
};
type SalesReport = {
    totalSales: number;
    unitsSold: number;
    averagePrice: number;
};
export declare const fetchProductCatalog: () => Promise<Product[]>;
export declare const fetchProductReviews: (productId: number) => Promise<Review[]>;
export declare const fetchSalesReport: () => Promise<SalesReport>;
export {};
//# sourceMappingURL=apiSimulator.d.ts.map