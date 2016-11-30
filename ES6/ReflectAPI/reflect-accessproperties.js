class Person {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }

    //getters and setters are no problem when using the ReflectAPI
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

Reflect.set(person, 'name', 'Anna');

console.log(mom); // "Anna", because we did overwrite it.

console.log(Reflect.get(person, 'name', mom)); // pass mom object as a receiver
// same as 'person.name'
console.log(Reflect.has(person, 'name'));

// Q. why is everything longer then with Reflect?
// A. because Reflect is meant to be used in dynamic environments where objects and properties are set dynamically and therefore you can not use the normal dot notation.
//    - this way you can access properties that you don't know at the time of writing your code. (this will tie in with the ProxyAPI)
