// interfaces are contracts which can be signed or used as a type...

interface NamedPerson {
    firstName: string;
    age?: number; // optional argument with ?
    [propName: string]: any; // there may be other args later but we don't know yet
    greet(lastName: string): void; // can also put a method in an interface
}

function greet(person: NamedPerson) {
    console.log("Hello, " + person.name);
}

function changeName(person: NamedPerson) {
    person.name = "Mandy";
}

const person: NamedPerson = {
    firstName: 'Robbie',
    // don't need to pass name because it is optional
    hobbies: ["Cooking, Sportsing"],
    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
}

// greet({firstName: "Robbie", age: 24});
changeName(person);
greet(person);
person.greet("Anything");

// can also create a class that implements an interface
class Person implements NamedPerson {
    firstName: string;
    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
}

const myPerson = new Person();
myPerson.firstName = "Robbie";
greet(myPerson);
myPerson.greet("Anything");


// Function Types

interface DoubleValueFunc {
    (number1: number, number2: number): number; // this is a function type that says "whatever uses this interface must be a function of this type"
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number) {
    return (value1 + value2) * 2;
};

console.log(myDoubleFunction(10,20));


// Interface Inheritance

interface AgedPerson extends NamedPerson {
    age: number; // needs to have all methods and props from both interfaces
}

const oldPerson: AgedPerson = {
    age: 30,
    firstName: "Robbie",
    greet(lastName: string) {
        console.log("Hello!");
    }
};

console.log(oldPerson);

// Interfaces don't get hired at all, it's just there to enforce rules