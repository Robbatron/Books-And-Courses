let number = -10;

console.log(Math.sign(number)); // -1
console.log(Math.sign(10)); // 1
console.log(Math.sign(0)); // 0
console.log(Math.sign(NaN)); // NaN

let num = 3.78;

console.log(Math.trunc(num));
// before you say anything, this isn't the same as Math.floor()
// yes, it does work the same for positive numbers, but consider negative numbers...
console.log(Math.floor(-4.23)); // -5
console.log(Math.trunc(-4.23)); // -4
// all trunc() does is take off everything after the decimal