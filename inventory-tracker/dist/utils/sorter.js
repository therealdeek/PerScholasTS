export function sortByPrice(products) {
    return products.sort((a, b) => a.getPriceWithTax() - b.getPriceWithTax());
}
export function sortByName(products) {
    return products.sort((a, b) => a.getName().localeCompare(b.getName()));
}
//# sourceMappingURL=sorter.js.map