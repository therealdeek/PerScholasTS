import _ from 'lodash';
const processData = (data) => {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        const processedItem = {
            id: 23,
            name: "David",
            price: 100,
            discountedPrice: 50
        };
        result.push(processedItem);
    }
    return _.orderBy(result, ['discountedPrice'], ['asc']);
};
export { processData };
//# sourceMappingURL=dataProcessor.js.map