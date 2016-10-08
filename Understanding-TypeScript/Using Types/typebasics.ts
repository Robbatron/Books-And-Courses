//////////////////////// BASIC TYPES ////////////////////////

// string
let myName : string = 'Robbie';
// myName = 28; // error 'type number' is not assignable to type 'string'.

// number
let myAge: number = 27;
// myAge = 'Robbie'; // error

// boolean
let hasHobbies: boolean = false;
// hasHobbies = 1; // error

// assign types explicity with colon
let myRealAge: any;
myRealAge = 27;
myRealAge = '27'; // no error

// array
let hobbies: any[] = ["cooking", "sporting"];
console.log(hobbies[0]);

// tuples (arrays with mixed types and limited # of items)
let address: [string, number] = ["Superstreet", 99];

// enum (make numbers more expressive)
enum Color {
    Gray, // 0
    Green = 100, // would normally be 1, but we assigned Green to 100
    Blue // 101
}
let myColor: Color = Color.Green;
console.log(myColor); // 100
let mySecondColor: Color = Color.Blue;
console.log(mySecondColor); // but then this is 101, unless we assign it to 2

// any (try to avoid)
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3};
console.log(car);

//////////////////////// END OF BASIC TYPES ////////////////////////

// functions
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
    console.log("Hello!");
    // error if you try to return anything
}

// argument types
function multiply(value1: number, value2: number) {
    return value1 * value2;
}
console.log(multiply(10, 2));

// function types
let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;
myMultiply(5,2);