//////////////////////// BASIC TYPES ////////////////////////
// string
var myName = 'Robbie';
// myName = 28; // error 'type number' is not assignable to type 'string'.
// number
var myAge = 27;
// myAge = 'Robbie'; // error
// boolean
var hasHobbies = false;
// hasHobbies = 1; // error
// assign types explicity with colon
var myRealAge;
myRealAge = 27;
myRealAge = '27'; // no error
// array
var hobbies = ["cooking", "sporting"];
console.log(hobbies[0]);
// tuples (arrays with mixed types and limited # of items)
var address = ["Superstreet", 99];
// enum (make numbers more expressive)
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 101
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor); // 100
var mySecondColor = Color.Blue;
console.log(mySecondColor); // but then this is 101, unless we assign it to 2
// any (try to avoid)
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
//////////////////////// END OF BASIC TYPES ////////////////////////
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log("Hello!");
    // error if you try to return
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(10, 2));
// function types
var myMultiply;
myMultiply = multiply;
myMultiply(5, 2);
