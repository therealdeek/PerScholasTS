import { PhysicalProduct } from '.models/PhysicalProduct.js';
import { DigitalProduct } from '.models/DigitalProduct.js';
import { calculateTax } from './utils/taxCalculator.js';
const inventory = [
    new PhysicalProduct('BOOK001', 'The Great Gatsby', 10.99, 0.5),
    new PhysicalProduct('BOOK002', 'Great Expectations', 15.99, 0.5),
    new DigitalProduct('EBOOK001', 'The Great Gatsby', 13.99, 0.5),
    new DigitalProduct('EBOOK002', 'Animal Farm', 25.99, 0.5),
];
for (const product of inventory) {
    console.log('-----------------------------');
    console.log(product.displayDetails);
    console.log('Price with tax: $${calculateTax(product).toFixed(2)}');
}
//# sourceMappingURL=main.js.map