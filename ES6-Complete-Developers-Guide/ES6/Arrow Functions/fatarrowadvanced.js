const double = function (number) {
    return number * 2;
}

console.log(double(8)); // 16

// if there is only one arg, you can omit the parens
const doubleCompact = number => number * 2;
const double2 = (number1, number2) =>
    number1 * 2 + number2 * 2;

console.log(double2(8, 4)); // 24

const doubleNoArgs = () => 2;
console.log(doubleNoArgs()); // 2

const numbers = [1, 2, 3];

var a = numbers.map(number => number * 2);
console.log(a); // [2, 4, 6]