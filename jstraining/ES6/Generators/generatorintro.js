// Q. What is a generator?
// A. Function that can be entered and exited multiple times

function* numbers() {
    yield;
}

const gen = numbers();
console.log(gen.next()); // false
console.log(gen.next()); // true
