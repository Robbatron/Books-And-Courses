var person = {
    firstName: "John",
    lastName: "Doe",
    getFullName: function() {
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }

}

// the bind() method lets you assign what 'this' points to

var logName = function(lang1, lang2) {
        console.log('Logged: ' + this.getFullName());
        console.log('Arguments: ' + lang1 + ' ' + lang2);
        console.log('---');
    } // can also .bind(person) right after the function

// you can also bind on the function name and pass to another function
var logPersonName = logName.bind(person);
logPersonName('en', 'es');

// the call() method works the same as the bind() method
// but also lets you execute a function and pass it parameters
// while defining what 'this' means

// invoking, defining 'this', and passing parameters all with one method
logName.call(person, 'en', 'es');

// same as call but parameters must be array list
// (this could be more useful under mathematical circumstances)
logName.apply(person, ['en', 'es']);

(function(lang1, lang2) {
    console.log('--------------------');
    console.log('IIFE Apply/Bind/Call')
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('---');
}).apply(person, ['en', 'es']); // awwwesome


// function borrowing
var person2 = {
    firstName: 'Jane',
    lastName: 'Doe'
}

console.log(person.getFullName.apply(person2));

// function currying: creating a copy of a function but with some preset parameters
function multiply(a, b) {
    return a * b;
}

// this means that you can set default parameters for the multiply
// function by creating a new function that mimicks its behavior
var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(5)); // -> 10

var multiplyByThree = multiply.bind(this, 3);
console.log(multiplyByThree(6)); // -> 18

var multiplyByFour = multiply.bind(this, 4);
console.log(multiplyByThree(7)); // -> 28