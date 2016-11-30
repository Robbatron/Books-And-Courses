// function b() {
// 	console.log(myVar);
// 	// outer reference is the global execution context variable environment
// 	// when b() can't find myVar, it goes down the scope chain to find it.
	 
// }

// function a() {
// 	var myVar = 2;
// 	b();
// }

// var myVar = 1;
// a();

// // But if we change the lexical environment...
function a() {
	function b() {
		console.log(myVar);
	}

	var myVar = 2;
	b();
}

var myVar = 1;
a();