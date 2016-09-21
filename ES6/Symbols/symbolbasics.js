// with symbols you can add properties to objects,
// the symbol is the key, of which we know is unique.

let symbol = Symbol('debug');
console.log(typeof symbol); // outputs "symbol". this means that symbol is a new primitive!?!?!?!?

let anotherSymbol = Symbol('debug');
console.log(symbol === anotherSymbol);

let obj = {
    name: 'max',
  [symbol]: 22 // use symbol as property name
}

console.log(obj); // only shows name property
console.log(obj[symbol]); // but it is still here
