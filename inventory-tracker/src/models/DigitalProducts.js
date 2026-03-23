import { Product } from "./Product.js";
export class DigitalProduct extends Product {
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
        return '${super.displayDetails()} | File Size: ${this.formattedFileSize}';
    }
}
//# sourceMappingURL=DigitalProducts.js.map