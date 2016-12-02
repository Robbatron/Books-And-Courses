/* 
In JavaScript...
	*** All primitive types are passed by value
	*** All functions are passed by reference
*/

// By value (primitives)
var a = 3;
var b;

b = a; // 'b' copies the value from 'a' and sets it at a new place in memory
a = 2; // changing 'a' doesn't effect 'b'

console.log(a);
console.log(b);

// By Reference (all objects (including functions))
var c = { greeting: 'hi' }
var d;

// 'd' points to the same address in memory that 'c' points to
// they are not copies of each other
d = c;

// Mutate: To change something ... 'Immutable' means it cannot be changed
c.greeting = 'hello' // mutating 'c' will change 'd' as well

console.log(c);
console.log(d);

// By Reference (even as parameters)
function changeGreeting(obj) {
	obj.greeting = 'Hola'; // mutate
}

changeGreeting(d);
console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)
c = { greeting: 'howdy' }; 

// 'c' points to a different spot in memory because the property had to be created,
// then 'c' was assigned to it.
console.log(c);
console.log(d);



