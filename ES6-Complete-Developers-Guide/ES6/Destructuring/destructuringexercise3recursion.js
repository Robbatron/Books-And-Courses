// Recursion with Destructuring

//This one is probably the hardest exercise in the entire course!
//
//Use array destructuring, recursion, and the rest/spread operators to create a function 'double' that will return a new array with all values inside of it multiplied by two.  Do not use any array helpers! Sure, the map, forEach, or reduce helpers would make this extremely easy but give it a shot the hard way anyways :)
//
//Input:
//
//double([1,2,3])
//
//Output
//
//[2,4,6]
//
//Hint: Don't forget that with recursion you must add a base case so you don't get an infinite call stack.  For example, if 'const [ number, ...rest ] = numbers' and number is undefined do you need to keep walking through the array?

const numbers = [1, 2, 3];

function double(arr) {
    const [num, ...spread] = arr;
    if (num) {
        return [num * 2, ...double(spread)];
    }
    return arr;
}
