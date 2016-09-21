let number = NaN;

console.log(isNaN(number)); // true
console.log(Number.isNaN(number)); // also true

let numbers = 10.1;

console.log(Number.isFinite(numbers));
console.log(Number.isInteger(numbers));