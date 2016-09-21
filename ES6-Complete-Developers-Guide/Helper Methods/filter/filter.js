var products = [
    {
        name: 'cucumber',
        type: 'vegetable',
        quantity: 0,
        price: 1
    },
    {
        name: 'banana',
        type: 'fruit',
        quantity: 10,
        price: 15
    },
    {
        name: 'celery',
        type: 'vegetable',
        quantity: 30,
        price: 9
    },
    {
        name: 'orange',
        type: 'fruit',
        quantity: 3,
        price: 5
    },
];

//I ONLY WANT TO SEE FRUIT!!!
var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit')
        filteredProducts.push(products[i]);
}

console.log(JSON.stringify(filteredProducts));


// Now with filter...
var filteredProducts = products.filter(function (product) {
    return product.type === 'fruit'; // if condition is met, it is moved to new array
});

console.log(JSON.stringify(filteredProducts));


// Type is 'vegetable', quantity is greater than 0, price is less than 10
var match = products.filter(function (product) {
    return product.type === 'vegetable' && product.quantity > 0 && product.price < 10
});

console.log(JSON.stringify(match));