//////////////////////// BASIC TYPES ////////////////////////
/* STRING */
let myName = 'Robbie';
// myName = 28; // error 'type number' is not assignable to type 'string'.
/* NUMBER */
let myAge = 27;
// myAge = 'Robbie'; // error
/* BOOLEAN */
let hasHobbies = false;
// hasHobbies = 1; // error
/* ARRAY */
let hobbies = ["cooking", "sporting"];
console.log(hobbies[0]);
/* TUPLES (arrays with mixed types and limited # of items) */
let address = ["Superstreet", 99];
/* ENUM (make numbers more expressive) */
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 101
})(Color || (Color = {}));
let myColor = Color.Green;
console.log(myColor); // 100
let mySecondColor = Color.Blue;
console.log(mySecondColor); // but then this is 101, unless we assign it to 2
/* ANY */
let car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
//////////////////////// END OF BASIC TYPES ////////////////////////
/* FUNCTIONS */
function returnMyName() {
    return myName;
}
console.log(returnMyName());
/* VOID */
function sayHello() {
    console.log("Hello!");
    // error if you try to return anything
}
/* ARGUMENT TYPES */
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(10, 2));
/* FUNCTION TYPES */
let myMultiply;
myMultiply = multiply;
myMultiply(5, 2);
/* OBJECTS */
let userData = {
    name: 'Robbie',
    age: 27
};
/* COMPLEX OBJECTS */
let complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
let complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
/* UNION TYPES */
// in this case we either want to use number or string but NOT boolean
let myRealRealAge = 24; // single pipe
myRealRealAge = "27"; // no error
/* CHECKING FOR TYPES */
let finalValue = 24;
if (typeof finalValue == "number") {
    console.log("final value is a number");
}
/* NEVER - TS2.0 */
function neverReturns() {
    throw new Error('An error!');
}
/* NULLABLE TYPES - TS2.0 */
let canBeNull = 12; // doesn't have to be null
canBeNull = null;
let canAlsoBeNull; // undefined
canAlsoBeNull = null; // can reset to null
let canThisBeAny = null; // fine because it is declared as nullable type
