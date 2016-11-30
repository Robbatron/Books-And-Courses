/*
'undefined' is the value variables receive during the creation 
phase (the first phase of the execution context). Functions are stored
in full in memory, so 'undefined' is only assigned to variables.
*/

var a;
console.log(a);

if (a === undefined) {
	console.log('a is undefined!');
} else {
	console.log('a is defined!');
}