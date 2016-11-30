let array = [1, 2, 3];

console.log(array.copyWithin(1, 0, 2));
// args: target, what you want to copy, optional: end of place you want to copy
// this says to copy 2 to the 1 index

let it = array.entries();

for (let element of it) {
    console.log(element);
}