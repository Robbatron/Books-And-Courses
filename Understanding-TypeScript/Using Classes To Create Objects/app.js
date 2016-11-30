class Person {
    constructor(name, username) {
        this.username = username;
        this.age = 31;
        this.name = name;
    }
    printAge() {
        console.log(this.age);
        this.setType("Strapping young lad");
    }
    setType(type) {
        this.type = type;
        console.log(this.type);
    }
}
// instantiate class
const person = new Person("Robbie", "Robbatron");
console.log(person);
person.printAge();
// person.setType("Cool guy"); // won't work with private 
// INHERITANCE
class Robbie extends Person {
    // content you find here always overrides what is in super class
    // name = "Robbie"; // override name prop on Person class
    constructor(userName) {
        super("Robbie", userName); // calls constructor of parent class
        this.age = 24;
        // console.log(this.type); we get an error here because type is private
    }
}
const robbie = new Robbie("Robert");
console.log(robbie);
// GETTERS & SETTERS
class Plant {
    constructor() {
        this._species = "Default";
    }
    get species() {
        return this._species; // decide what you want to return
    }
    set species(value) {
        if (value.length > 3) {
            this._species = value;
        }
        else {
            this._species = "Default";
        }
    }
}
let plant = new Plant();
console.log(plant.species); // Default
plant.species = "AB";
console.log(plant.species); // Default
plant.species = "Green Plant";
console.log(plant.species); // Green Plant, because it makes it through the 'else' check
// STATIC PROPERTIES & METHODS 
class Helpers {
    static calcCircumference(diameter) {
        return this.PI * diameter;
    }
}
Helpers.PI = 3.14; // available outside of class
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
// ABSTRACT CLASSES
class Project {
    constructor() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    calcBudget() {
        return this.budget * 2;
    }
}
// Now we can make a class that inherits from the abstract class
class ITProject extends Project {
    // now we can add logic to changeName
    changeName(name) {
        this.projectName = name;
    }
}
// Then we can instantiate it
let newProject = new ITProject();
console.log(newProject); // Default
newProject.changeName("Super IT Project"); // pass a string into the name parameter
console.log(newProject); // Super IT Project (name changed)
// PRIVATE CONSTRUCTORS
class OnlyOne {
    constructor(name) {
        this.name = name;
    }
    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}
// let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right.name);
// right.name = 'Something else'; // valid if OnlyOne is not readonly, but we have made it so
