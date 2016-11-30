class Helper {
    static logTwice(msg) {
        console.log(msg);
        console.log(msg);
    }
}
// static makes methods available without having to instantiate them.
// var helper = new Helper('Logged!');
Helper.logTwice('Logged!'); // works without previous line!

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
}

let max = new Max(27);