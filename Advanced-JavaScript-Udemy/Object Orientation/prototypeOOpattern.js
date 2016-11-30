// "Prototypal Inheritance" is just the prototype chain. Nothing more. Nothing less.

// Base Object
var Person = {
    init: function(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        return this;
    },
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

// Create an object with prototype pointing to Person object
robbie.init("robbie", "delfs");
console.log(robbie.fullName());