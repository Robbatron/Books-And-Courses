function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
// Putting greet on the Person prototype will make the function available to all objects created with the 'Person' function constructor.
Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

//can look at prototype
console.log(john.___proto__);
console.log(jane.___proto__);
console.log(john.____proto__ === jane.___proto__);
