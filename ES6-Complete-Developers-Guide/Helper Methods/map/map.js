var numbers = [1, 2, 3];
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
}
console.log(doubledNumbers);

// Q. Why did we make a new array for doubledNumbers?
// A. Because we want to mutate as little as possible in JS.

var doubled = numbers.map(function (number) {
    return number * 2;
});

/* RETURN KEYWORD IS CRITICAL */

// Each numbers in the numbers array is being passed to the iterator function and pushed into a new array. See map png.

console.log(doubled);