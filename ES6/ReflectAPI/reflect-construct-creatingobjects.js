// What is Reflect?
// - It gives us tools to evaluate our code during runtime.
// - Offers built-in static methods that we can use to create object, properties, configure properties, call functions

// Why do we need Reflect?
// - Bundles objects and built-in keywords
// - It gives us a great way to interact with the ProxyAPI
// - Introduces new methods

class Person {
    constructor(name) {
        this.name = name;
    }
}

// Construct takes up to three args:
// - function constructor
// - array of args to pass to constructor
// - (optional) object that overwrites the prototype

function TopObj() {
    this.age = 27;
}

let person = Reflect.construct(Person, ['Max'], TopObj);

console.log(person instanceof Person) // true
console.log(person.__proto__ === TopObj.prototype);
