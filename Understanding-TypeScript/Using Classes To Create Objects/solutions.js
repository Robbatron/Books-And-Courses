// Exercise 1 - Class
class Car {
    constructor(name) {
        this.acceleration = 0;
        this.name = name;
    }
    honk() {
        console.log("Tooooooooot");
    }
    accelerate(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);
// Exercise 2 - Inheritance
class BaseObject {
    constructor() {
        this.width = 0;
        this.length = 0;
    }
}
class Rectangle extends BaseObject {
    calculationSize() {
        return this.width * this.length;
    }
}
const rectangle1 = new Rectangle();
rectangle1.width = 5;
rectangle1.length = 10;
console.log(rectangle1.calculationSize());
// Exercise 3 - Getters & Setters
class Person1 {
    constructor() {
        this._firstName = "";
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }
}
const person1 = new Person1();
console.log(person1.firstName); // empty string because we logged the name before doing anything with it
person1.firstName = "Ro";
console.log(person1.firstName); // empty string because value.length > 3
person1.firstName = "Robbie";
console.log(person1.firstName); // Robbie, because we set firstName
