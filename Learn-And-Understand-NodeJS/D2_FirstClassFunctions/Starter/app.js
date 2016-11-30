// function statement
function greet() {
    console.log('hi');
}

greet();

// functions are first-class
function logGreeting(fn) {
    fn();
}

logGreeting(greet);

// function expressions
var greetMe = function() {
    console.log('Hey Tony');
};

greetMe();

logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function() {
    console.log('Hey Tony!');
});