// Expression: Unit of code that results in a value
// 'if' is a statement, not an expression, because it does not return a value
greet();

function greet() {
	console.log('hi');
}

// anonymousGreet(); // undefined? Yuuuuup.

var anonymousGreet = function () {
	console.log('hi');
}

anonymousGreet();

function log(a) {
	a();
}

// // creating 'on the fly'
// log("The nightman cometh");
// // creating object 'on the fly'
// log( { greeting: "hi" } );
// // creating a function 'on the fly'
log(function() {
	console.log('hi');
});

