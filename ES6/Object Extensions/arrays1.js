// let array = Array(5); // creates an array with 5 undefined's
// let array = Array.of(5); // creates an array and inserts a 5
let array = [10, 12, 16];

// array.fill(100, 1, 2);

// console.log(array);

// console.log(array.find(val => val >= 12)); // only gives back first element that the condition matches

// let newArray = Array.from(array, val => val * 2);
// console.log(newArray);

var inventory = [
    {
        name: 'apples',
        quantity: 2
    },
    {
        name: 'bananas',
        quantity: 0
    },
    {
        name: 'cherries',
        quantity: 5
    },
];

function findCherries(fruit) {
    return fruit.name === 'cherries';
}

console.log(inventory.find(fruit => fruit.name === 'bananas'));
console.log(inventory.find(findCherries));