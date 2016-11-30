function b() {
	var myVar;
	console.log(myVar);
}

function a() {
	var myVar = 2;
	console.log(myVar);
	b();
	/*
	a() has a separate execution context, so it will always equal 2.
	Even when we return myVar and call a() from outside of the function,
	myVar will still equal 2.
	*/
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar); //same because it's inside the global execution context