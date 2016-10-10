//////////////////////// BASIC TYPES ////////////////////////


/* STRING */
let myName: string = 'Robbie';
// myName = 28; // error 'type number' is not assignable to type 'string'.


/* NUMBER */
let myAge: number = 27;
// myAge = 'Robbie'; // error


/* BOOLEAN */
let hasHobbies: boolean = false;
// hasHobbies = 1; // error


/* ARRAY */
let hobbies: any[] = ["cooking", "sporting"];
console.log(hobbies[0]);


/* TUPLES (arrays with mixed types and limited # of items) */
let address: [string, number] = ["Superstreet", 99];


/* ENUM (make numbers more expressive) */
enum Color {
    Gray, // 0
    Green = 100, // would normally be 1, but we assigned Green to 100
    Blue // 101
}
let myColor: Color = Color.Green;
console.log(myColor); // 100
let mySecondColor: Color = Color.Blue;
console.log(mySecondColor); // but then this is 101, unless we assign it to 2


/* ANY */
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);


//////////////////////// END OF BASIC TYPES ////////////////////////


/* FUNCTIONS */
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());


/* VOID */
function sayHello(): void {
    console.log("Hello!");
    // error if you try to return anything
}


/* ARGUMENT TYPES */
function multiply(value1: number, value2: number) {
    return value1 * value2;
}
console.log(multiply(10, 2));


/* FUNCTION TYPES */
let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;
myMultiply(5, 2);


/* OBJECTS */
let userData: { name: string, age: number } = {
    name: 'Robbie',
    age: 27
};


/* COMPLEX OBJECTS */
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};


/* TYPE ALIAS */
type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};


/* UNION TYPES */
// in this case we either want to use number or string but NOT boolean
let myRealRealAge: number | string = 24; // single pipe
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