import { PhysicalProduct } from './models/PhysicalProducts.js';
import { DigitalProducts } from './models/DigitalProducts.js';
import { sortByPrice, sortByName } from './utils/sorter.js';
import { applyBulkDiscount } from './utils/bulkDiscount.js';


const inventory = [
    new PhysicalProduct('BOOK001', 'The Great Gatsby', 10.99, 0.5),
    new PhysicalProduct('BOOK002', 'Great Expectations', 15.99, 0.5),
    new DigitalProducts('EBOOK001', 'The Great Gatsby', 13.99, 0.5),
    new DigitalProducts('EBOOK002', 'Animal Farm', 25.99, 0.5),

];
console.log('\n--- Discounted Prices ---');
for (const product of inventory){
    if(product instanceof DigitalProducts){
        console.log(product.displayDetails());
    console.log(`Price after 15% discount: $${product.applyDiscount(15).toFixed(2)}`);

    }

    console.log('\n--- Sorted by Price ---');
    for (const product of sortByPrice(inventory)){
        console.log(product.displayDetails());
    }

    console.log('\n--- Sorted by Name ---');
    for (const product of sortByName(inventory)){
        console.log(product.displayDetails());
    }

    console.log('\n--- Bulk Discount ---');
    const bulkQuantities = [1, 10, 25];
    for (const product of inventory){
        if(product instanceof DigitalProducts){
            console.log(`\n${product.displayDetails()}`);
            for (const quantity of bulkQuantities){
                const discountedPrice = applyBulkDiscount(product, quantity);
                console.log(`Price after ${quantity} items: $${discountedPrice.toFixed(2)}`);
            }
        }
    }

}