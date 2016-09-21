"use strict";

// What is variable hoisting?

// This lesson was very confusing, I think I understood more before than after.

console.log(a);
var a = 1;

function foo() {
    var a;
    console.log(a);
    a = 1;
}
