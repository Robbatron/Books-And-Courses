// we're used to writing functions like this...
const add = function (a, b) {
    return a + b;
}

// but now we can write it like this...
const addFat = (a, b) => a + b;

console.log(addFat(1, 2));

// any time there's a single JS expression, we can use a fat arrow function

// one caveat...
const addExplicitReturn = (a, b) => {
    // a + b; 
    // will return undefined because there is no implicit return when you include braces.
    return a + b; // need to specify return value
}

console.log(addExplicitReturn(2, 3));