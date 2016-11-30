"use strict";

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function() {
        return firstName + ' ' + lastName; // closure
    }
};

var dude = new Person("robbie", "delfs");

console.log(dude);
console.log(dude.fullName());


// same as...
// var dude = {};
// Person.call(dude, "asim", "hussain");
// console.log(dude);

var dude2 = new Person("robbie", "delfs");
// prototype approach
Person.prototype.fullNamePrototype = function() {
    return this.firstName + ' ' + this.lastName;
}

console.log(dude2);
console.log("on prototype:", dude2.fullNamePrototype());

// Q. why do this?
// A. if you create multiple instances, they all share the same prototype and that function is available everywhere

// but, now we can change firstName and lastName because they are both public. how do we prevent that?
dude.lastName = "is a loser!"; // ;( someone can change it to this, and that's not very nice

// Q. so, we can take advantage of closures...
// A. we can do this by changing 'this.firstName' and 'this.lastName' to just 'firstName' and 'lastName' in our constructor function
console.log(dude.fullName());

// now we can put a breakpoint on the body of the fullName function and see "Closure" in the scope in Chrome Dev Tools
