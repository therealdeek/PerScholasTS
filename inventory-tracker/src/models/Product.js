export class Product {
    sku;
    name;
    price;
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    displayDetails() {
        return 'SKU: ${this.sku}, Name: ${this.name}, Price: ${this.price.toFixed(2)}';
    }
    getPriceWithTax(taxRate) {
        return this.price * (1 + taxRate);
    }
}
//# sourceMappingURL=Product.js.map