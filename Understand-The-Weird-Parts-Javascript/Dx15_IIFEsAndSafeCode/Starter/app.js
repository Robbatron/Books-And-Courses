// IIFE
var firstName = 'John';

(function(name) {
    var greeting = 'Hello';
    console.log(greeting + ' ' + name);
}(firstName));



/*
	Execution stack of an IIFE:
		- Global Execution Context is created (empty)
		- Syntax parser sees " (function(name){...} "
		- Creates anonymous function object in memory
		- Sees the invocation parenthesis so...
		- A new Execution Context is created (no longer using global)
		- Code is run line-by-line inside function
		- JS engine sees variable
		- Stores variable in the new Execution Context

	Nothing is stored on the Global Execution Context!!! 
*/



// What if we want to pass something to the global object?
(function(global, name) {
    var greeting = 'Hello';
    global.greeting = 'Hello'; // Intentionally putting 'greeting' on global object
    console.log(greeting + ' ' + name);
    
}(window, firstName)); // IIFE

console.log(greeting);

















