class Person {
    constructor() {
        this.name = 'Max';
    }
}

let person = new Person();

Person.prototype.age = 27;

let proto = {
    age: 30,
    greet() {
        console.log('Hello!');
    }
};

Reflect.setPrototypeOf(person, proto); // sets proto as person's prototype

Reflect.apply(person.greet, null, []); // now person has access to the greet method
