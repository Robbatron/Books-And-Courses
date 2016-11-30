class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
    }
}

class Max extends Person {
    constructor(age) {
        super('Max'); // accesses parent constructor
        this.age = age;
    }

    greet() {
        console.log('Hello');
    }

    greetTwice() {
        super.greet(); // will print whole kaboodle
        this.greet(); // will only print 'Hello'
    }
}

//let person = new Person('Max');
//person.greet();

let max = new Max(27);
max.greetTwice();