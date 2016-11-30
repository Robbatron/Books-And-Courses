class Person {
	// all the different ways you can declare properties and methods
	name: string;
	private type: string;
	protected age: number = 31;

	constructor(name: string, public username: string) {
		this.name = name;
	}

	printAge() {
		console.log(this.age);
		this.setType("Strapping young lad");
	}

	setType(type: string) {
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

	constructor(userName: string) {
		super("Robbie", userName); // calls constructor of parent class
		this.age = 24;
		// console.log(this.type); we get an error here because type is private
	}
}

const robbie = new Robbie("Robert");
console.log(robbie);

// GETTERS & SETTERS
class Plant {
	private _species: string = "Default";

	get species() {
		return this._species; // decide what you want to return
	}

	set species(value: string) { // make sure criteria are met before setting a value
		if (value.length > 3) {
			this._species = value;
		} else {
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
	static PI: number = 3.14; // available outside of class
	static calcCircumference(diameter: number): number {
		return this.PI * diameter;
	}
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// ABSTRACT CLASSES
abstract class Project { // cannot be instantiated directly, they are just there to be inherited from
	projectName: string = "Default";
	budget: number = 1000;

	abstract changeName(name: string): void; // only define how the function should look, without implementing any logic

	calcBudget() {
		return this.budget * 2;
	}
}

// Now we can make a class that inherits from the abstract class
class ITProject extends Project {
	// now we can add logic to changeName
	changeName(name: string): void {
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
	private static instance: OnlyOne;

	private constructor(public readonly name: string) {}

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
