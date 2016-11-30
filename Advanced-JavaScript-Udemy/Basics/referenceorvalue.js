"use strict";

// Does JS pass values by reference or by value?

// Short answer: If it is a primitive type (such as string, number, boolean) are passed by value and objects are passed by reference.

var a;

function foo(a) {
    a = false;
}

// Value: If you change the value of a primitive type inside a function, it won't effect the value in the outer scope.

// Reference: When you pass things by reference, you are passing things that "point" to something else rather than a copy of the object.

var a = {};

function foo(a) {
    a.moo = false;
}

foo(a);
console.log(a);

// When you change 'A' now, you can't change what 'A' is pointing to, just the value of ahwat 'A' is pointing to...and that's pretty damn cool.

// SO, does JavaScript pass variables by reference or by value?
// It passes primitive types by value and objects by reference...basically.


// Hence, what will the following print out?
"use strict";
var a = 1;
var b = {};

function foo(x, y) {
    x = 2;
    y.moo = 3;
}

foo(a, b);
console.log("a = " + a + "; b = " + JSON.stringify(b));

// a = 1; b = {'moo':3}
// Why? because "a" is passed by value so updates to the "a" in function "foo" will NOT be visible outside of the function "foo".
