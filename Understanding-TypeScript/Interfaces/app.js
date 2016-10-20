// interfaces are contracts which can be signed or used as a type...
function greet(person) {
    console.log("Hello, " + person.name);
}
function changeName(person) {
    person.name = "Mandy";
}
const person = {
    firstName: 'Robbie',
    // don't need to pass name because it is optional
    hobbies: ["Cooking, Sportsing"],
    greet(lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
// greet({firstName: "Robbie", age: 24});
changeName(person);
greet(person);
person.greet("Anything");
// can also create a class that implements an interface
class Person {
    greet(lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
    ;
}
const myPerson = new Person();
myPerson.firstName = "Robbie";
greet(myPerson);
myPerson.greet("Anything");
let myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
const oldPerson = {
    age: 30,
    firstName: "Robbie",
    greet(lastName) {
        console.log("Hello!");
    }
};
console.log(oldPerson);
// Interfaces don't get hired at all, it's just there to enforce rules 
