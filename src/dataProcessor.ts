import _ from 'lodash';

interface processedItem {
    id: number;
    name: string;
    price: number;
    discountedPrice: number;
}

const processData = (data: any) => {
    let result = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i];

        const processedItem: processedItem = {
            id: 23,
            name: "David",
            price: 100,
            discountedPrice: 50
        };

        result.push(processedItem);
    }

    return _.orderBy(result, ['discountedPrice'], ['asc']);
}

export { processData };