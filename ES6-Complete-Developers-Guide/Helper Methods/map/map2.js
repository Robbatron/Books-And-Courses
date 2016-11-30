// Listing properties and objects with map.

var cars = [
    {
        model: 'Buick',
        price: 'cheap'
    },
    {
        model: 'Camaro',
        price: 'expensive'
    }
];

for (var i = 0; i < cars.length; i++) {
    console.log(cars[i].price);
}

var prices = cars.map(function (car) {
    return car.price;
});

console.log(prices);