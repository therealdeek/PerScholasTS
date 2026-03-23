import { Product } from './Product.js'

export class PhysicalProduct extends Product {
    private weight: number;

    constructor(sku: string, name: string, price: number, weight: number){
        super(sku, name, price);
        this.weight = weight;
    }

    getPriceWithTax(): number {
        return this.price * 1.10;           
    }

    getformattedWeight(): string {
        return `${this.weight} kg`;
    }

    displayDetails(): string {
        return `${super.displayDetails()} | Weight: ${this.getformattedWeight()}`;
}}
