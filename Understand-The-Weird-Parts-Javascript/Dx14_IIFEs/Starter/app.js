// Immediately Invoked Function Expressions (IIFE's)
var input = prompt("Please enter your name: ");

// function statement (Not IIFE)
function greet(name) {
	console.log('Hello, ' + name + '!');
}
greet(input);

// function expression (Not IIFE)
var greetFunc = function(name) {
	console.log('Hello, ' + name + '!');
}
greetFunc(input);

// using an IIFE
var greeting = function(name) {
	return 'Hello, ' + name + '!';
}(input); // here is the invocation! pass the arguments! super easy, ya dum dum!

console.log(greeting);

3;
"I am a string"; {
	name: 'Tony'
}; // valid somehow


// IIFE: wrapping in parenthesis tricks the syntax parser
// without it, this would error out because function does not have a name
// It's like the up+b of JS, not intended in the language spec but always used
(function(name) {
	var greeting = 'Inside IIFE: Hello, ';
	console.log(greeting + name + '!');
}(input)); // immediately invokes

// If you're an absolute fucking madman you can save a byte by prefixing
// the function with a unary operator
~ function(name) {
	var greeting = 'Inside IIFE: Hello, ';
	console.log(greeting + 'absolute fucking madman!');
}(input); // IIFE