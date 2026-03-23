import { Product } from "./Product.js";
export class DigitalProducts extends Product {
    fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    getPriceWithTax() {
        return this.price;
    }
    getFormattedFileSize() {
        return `${this.fileSize} MB`;
    }
    displayDetails() {
        return `${super.displayDetails()} | File Size: ${this.getFormattedFileSize()}`;
    }
    applyDiscount(percentage) {
        return this.price - (this.price * (percentage / 100));
    }
}
//# sourceMappingURL=DigitalProducts.js.map