import { Product } from "./Product.js";
import type { DiscountableProduct } from "./DiscountableProduct.js";
export declare class DigitalProducts extends Product implements DiscountableProduct {
    private fileSize;
    constructor(sku: string, name: string, price: number, fileSize: number);
    getPriceWithTax(): number;
    getFormattedFileSize(): string;
    displayDetails(): string;
    applyDiscount(percentage: number): number;
}
//# sourceMappingURL=DigitalProducts.d.ts.map