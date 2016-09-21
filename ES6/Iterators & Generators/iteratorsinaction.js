// Iterators are objects that know how to access values in a collection, one at a time.
// An array is an iterator, it is "iterable", it can output values one at a time.
// "An iterator is an object which you can loop through"

// A generator is a function which doesn't run to the end when you execute it
// yields the next value every time you call it

let array = [1, 2, 3];

array[Symbol.iterator] = function () {
    let nextValue = 10;
    return {
        next: function () {
            nextValue++;
            return {
                done: nextValue > 15 ? true : false,
                value: nextValue
            }
        }
    };
}

//let it = array[Symbol.iterator]();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next()); // done property is only set true when all values in collection have been printed out

// how is this useful?
// you can make any object iterable!!!

for (let element of array) {
    console.log(element);
}