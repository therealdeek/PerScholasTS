import type { DigitalProducts } from "../models/DigitalProducts.js";

export function applyBulkDiscount(products: DigitalProducts, quantity: number): number {
    const basePrice = products.getPriceWithTax();
    if(quantity >=25){
        return basePrice * 0.85;
    }else if(quantity >=10){
        return basePrice * 0.90;
    }else{
        return basePrice;
    }
}