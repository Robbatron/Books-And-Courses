// Set: list of just values (not key values pairs)
// - isn't this just an array? no.

// an array will store all duplicate values
let array = [1, 1, 1];

// a set will only store unique values
let set = new Set([1, 1, 1]);
set.add(2);
set.add(2);

for (element of set) {
    console.log(element); // 1, 2
}

console.log(set.has(1));

set.delete(1);
// does this delete all of the 1's? yes.
// - duplicate values aren't stored at all, they are just omitted

for (element of set) {
    console.log(element); // 2
}

console.log(set.has(1));

set.clear(); // can use this too!