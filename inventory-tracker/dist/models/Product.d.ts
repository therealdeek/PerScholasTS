export declare abstract class Product {
    protected sku: string;
    protected name: string;
    protected price: number;
    constructor(sku: string, name: string, price: number);
    displayDetails(): string;
    abstract getPriceWithTax(): number;
    getName(): string;
}
//# sourceMappingURL=Product.d.ts.map