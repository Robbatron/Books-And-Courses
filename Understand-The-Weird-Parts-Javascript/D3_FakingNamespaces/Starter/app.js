var greet = 'Hello!';
var greet = 'Hola!';

// container to keep variable and function names from clashing
var english = {
	greetings: {
		basic: 'Hello!'
	}
};
var spanish = {
	greetings: {}
};

spanish.greetings.greet = "Hola!";

console.log(english);
console.log(spanish);