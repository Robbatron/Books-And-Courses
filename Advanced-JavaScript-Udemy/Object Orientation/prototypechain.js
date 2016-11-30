var animal = {};

var robbie = Object.create(animal, {food: {value:"mango"}}); // creates new object and assigns a prototype to that object

console.log(asim.kind);

console.log(animal.isPrototypeOf(robbie));

robbie.kind = 'igloo';
console.log(robbie.kind);
console.log(animal.kind);

// uhhhhhh