class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

let person = new Person('Max');

// what is the prototype of person?
console.log(person.__proto__ === Person.prototype); // true