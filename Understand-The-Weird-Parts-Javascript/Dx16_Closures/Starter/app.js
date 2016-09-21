function greet(whatToSay) {
	return function(name) {
		console.log(whatToSay + ' ' + name);
	}
}
greet('Hey')('Tony');

/* 
	What is happening here?
		- The first invocation is returning the named function
		- The second invocation is returning the function that the first function returns.
*/

var sayHi = greet('Hi');
sayHi('Tony');

/*
	What is happening here?
		- Code starts and we have our Global Execution Context
		- When 'var sayHi...' is hit, it invokes the greet() function
		- The greet() function provides a new execution context
		- The greet() function argument (whatToSay) is sitting in its variable environment
		- Creates a function on the fly and returns it
		- After this, the greet() execution context is popped off the stack
	So, now the greet() execution context is gone, but the whatToSay variable is still in memory
		- Invoke sayHi function from Global EC, which then creates a new EC
		- Pass the name variable to the sayHi function, it then gets stored in that functions memory
		- Console.log() can still see the whatToSay variable
		- JS engine goes up the scope chain to look for the variable
		- Even though the EC of greet() was popped off the stack, the sayHi EC still has a reference
		  to the memory space of its outer environment
*/

/*
	- We created function 1 and put function 2 inside of it.
	- We then set function 1 and its argument to the 'sayHi' variable.
	- Then we used the 'sayHi' variable to invoke function 2 ON function 1
	- Function 1 is finished so it pops off the execution stack BUT...
	- Since functions are passed by reference...
	- Function 2 still has a reference to function 1's memory space!!!

*/