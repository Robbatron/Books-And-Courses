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
        super('Max');
        this.age = age;
    }

    greet() {
        console.log('Hello');
    }

    greetTwice() {
        super.greet();
        this.greet();
    }
}

//let person = new Person('Max');
let max = new Max(27)

//person.greet();
//max.greetTwice();

console.log(max.__proto__ === Max.prototype); // true
console.log(max.__proto__ === Person); // false