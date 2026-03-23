export declare abstract class Product {
    protected sku: string;
    protected name: string;
    protected price: number;
    constructor(sku: string, name: string, price: number);
    displayDetails(): string;
    getPriceWithTax(taxRate: number): number;
}
//# sourceMappingURL=Product.d.ts.map