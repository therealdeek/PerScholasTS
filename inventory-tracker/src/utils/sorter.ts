import type { Product } from "../models/Product.js";

export function sortByPrice(products: Product[]): Product[] {
    return products.sort((a, b) => a.getPriceWithTax() - b.getPriceWithTax());
}

export function sortByName(products: Product[]): Product[] {
    return products.sort((a, b) => a.getName().localeCompare(b.getName()));
}