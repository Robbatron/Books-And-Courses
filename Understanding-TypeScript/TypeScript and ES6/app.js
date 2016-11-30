// LET & CONST
let variable = "test";
const maxLevel = 100;
// maxLevel = 99; // error, reassigning a constant
// BLOCK SCOPING
function reset() {
    let variable = null; // will not conflict with outer variable named the same
    console.log(variable); // will log null
}
reset();
console.log(variable); // will still log "test"
// ARROW FUNCTIONS
const addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
const multiplyNumbers = (number1, number2) => number1 * number2;
console.log(multiplyNumbers(10, 4));
// DEFAULT PARAMETERS
const countdown = (start = 10) => {
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown();
// REST & SPREAD
const numbers = [1, 10, 99, -5];
// console.log(Math.max(numbers)); // won't work!
console.log(Math.max(33, 99, 10, -3)); // so we have to do this or...
console.log("Max:", Math.max(...numbers)); // works with spread
function makeArray(name, ...args) {
    return args;
}
console.log(makeArray("Robbie", 1, 2));
// DESTRUCTURING
const myHobbies = ["Cooking", "Sportsing"];
// const hobby1 = myHobbies[0]; // can do this, but there is an easier syntax
const [hobby1, hobby2] = myHobbies; // taaadaaa
console.log(hobby1, hobby2);
// also for objects
const userData1 = { name: "Robbie", age: 24 };
// const userName = userData.userName; // again, there is an easier syntax
const { name: userName, age: userAge } = userData1; // assigning aliases
console.log(userName, userAge);
// TEMPLATE LITERALS
const userName1 = "Robbie";
const greeting = `Hello, 
I'm ${userName1}.
This is cool!`;
console.log(greeting);
