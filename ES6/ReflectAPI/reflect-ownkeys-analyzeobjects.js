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

console.log(Reflect.ownKeys(person));
// notice how it's not showing getter and setter properties
// this is basically hasOwnProperty() in vanilla JS
