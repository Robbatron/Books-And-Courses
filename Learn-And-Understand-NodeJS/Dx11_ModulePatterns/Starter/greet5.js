// Revealing module pattern: Exposing only the properties and methods you want
//                           via a returned object.

// this method is extremely popular in JavaScript
var greeting = 'Hello world (shhhh)!!!!';

function greet() {
    console.log(greeting);
}

module.exports = {
    greet: greet
};

// there is no direct access to the greeting variable outside the module