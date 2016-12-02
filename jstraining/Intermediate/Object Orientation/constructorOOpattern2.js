"use strict";

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Person.prototype.fullName = function() {
    return this.firstName + ' ' + this.lastName;
}

// "Pseudo-Classical Inheritance"
function Professional(honorific, firstName, lastName) {
    Person.call(this, firstName, lastName); // DRY
    this.honorific = honorific;
};

Professional.prototype = Object.create(Person.prototype); // makes prof.fullName a function

Professional.prototype.professionalName = function() {
    return this.honorific + ' ' + this.firstName + ' ' + this.lastName;
};

var prof = new Professional("Dr.", "Robbie", "Delfs");
console.log(prof.professionalName());
console.log(prof.fullName());