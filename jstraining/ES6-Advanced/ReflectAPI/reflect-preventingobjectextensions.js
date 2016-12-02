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




console.log(Reflect.isExtensible(person)); // true

Reflect.preventExtensions(person); // lock the object

console.log(Reflect.isExtensible(person)); // now false

Reflect.defineProperty(person, 'hobbies', {
    value: ['Sports', 'Cooking']
}); // now undefined because we are preventing it from being extended

console.log(person.hobbies); // undefined
