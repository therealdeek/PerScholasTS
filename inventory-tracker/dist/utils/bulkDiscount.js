export function applyBulkDiscount(products, quantity) {
    const basePrice = products.getPriceWithTax();
    if (quantity >= 25) {
        return basePrice * 0.85;
    }
    else if (quantity >= 10) {
        return basePrice * 0.90;
    }
    else {
        return basePrice;
    }
}
//# sourceMappingURL=bulkDiscount.js.map