class Person {
    constructor(name) {
            this._name = name;
        }
        // encapsulates _name, so that it can only be called with the name() method
    get name() {
        return this._name.toUpperCase();
    }

    set name(value) {
        if (value.length > 2) {
            this._name = value;
        }
        console.log('Rejected!');
    }
}

let person = new Person('Max');
console.log(person._name);
console.log(person.name); // returns uppercase name since can only access the name method directly.


person._name = 'Anna';
console.log(person._name);