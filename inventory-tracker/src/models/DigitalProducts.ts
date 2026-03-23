import { Product } from "./Product.js";
import type { DiscountableProduct } from "./DiscountableProduct.js";

export class DigitalProducts extends Product implements DiscountableProduct {
    private fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number){
        super(sku, name, price);
        this.fileSize = fileSize;
    }

    getPriceWithTax(): number {
        return this.price;
    }

    getFormattedFileSize(): string {
        return `${this.fileSize} MB`;
    }

    displayDetails(): string {
        return `${super.displayDetails()} | File Size: ${this.getFormattedFileSize()}`;
    }

    applyDiscount(percentage: number): number {
        return this.price - (this.price * (percentage / 100));
    }

}