class Person {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

}

let mom = {
    _name: 'Mom'
};

let person = new Person('Max', 27);

Reflect.defineProperty(person, 'hobbies', {
    // writable: true,
    value: ['Sports', 'Cooking'],
    // configurable: true // can you change config after property has been created? Default: false
});

person.hobbies = ['Nothing']; // no hobbies :(

// delete person.age;
Reflect.deleteProperty(person, 'age');

console.log(person.age);
