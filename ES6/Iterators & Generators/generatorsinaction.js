// let obj = {
//   [Symbol.iterator]: gen
// }

function* gen(end) {
    //   yield 1;
    //   yield 2;
    for (let i = 0; i < end; i++) {
        yield i;
    }
}

// for (let element of obj) {
//   console.log(element);
// }

let it = gen(10);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());