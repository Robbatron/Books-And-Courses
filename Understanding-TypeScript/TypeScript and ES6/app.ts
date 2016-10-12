// LET & CONST
let variable = "test";

const maxLevel = 100;
// maxLevel = 99; // error, reassigning a constant

// BLOCK SCOPING
function reset(){
    let variable = null; // will not conflict with outer variable named the same
    console.log(variable); // will log null
}
reset();
console.log(variable); // will still log "test"

// ARROW FUNCTIONS
const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2;
};
console.log(addNumbers(10,3));

const multiplyNumbers = (number1: number, number2: number): number => number1 * number2;
console.log(multiplyNumbers(10,4));