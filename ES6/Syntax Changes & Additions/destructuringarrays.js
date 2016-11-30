// quick way to grab values from array
let numbers = [1, 2, 3];

let a = numbers[0]; // 1
let b = numbers[1]; // 2

let [a, b, c, d] = numbers;

console.log(a); // only copies the value
console.log(b); // only copies the value
console.log(d); // undefined because there is no fourth index
console.log(numbers); // values are still the same

let [a, ...b] = numbers; // pulling out remaining values and puts in new array
console.log(b); // [2,3]

// Can also set default values
let [a = 'default', b, c, d = 'default'] = numbers;

console.log(d); // "default"
console.log(a); // 1, since a is available (not undefined)

let a = 5;
let b = 10;

[b, a] = [a, b]; // swaps values

console.log(b);
console.log(a);

let [a, , c] = numbers;
console.log(a, c); // 1 and 3