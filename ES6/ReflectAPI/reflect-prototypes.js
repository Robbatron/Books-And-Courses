class Person {
    constructor() {
        this.name = 'Max';
    }
}

let person = new Person();

Person.prototype.age = 27;

console.log(Reflect.getPrototypeOf(person) == Person.prototype);
// same as person.__proto__
console.log(Reflect.getPrototypeOf(person));

let proto = {
    age: 30
};

Reflect.setPrototypeOf(person, proto); // sets proto as person's prototype

console.log(Reflect.getPrototypeOf(person));
