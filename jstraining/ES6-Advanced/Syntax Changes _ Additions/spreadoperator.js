let numbers = [1, 2, 3, 4, 5];

console.log(Math.max(numbers)); //NaN because max() expects an array
console.log(Math.max(...numbers)); // 5

// what is happening here?

console.log(...numbers); // prints 1 through 5

// it takes the array and splits them up into individual list values