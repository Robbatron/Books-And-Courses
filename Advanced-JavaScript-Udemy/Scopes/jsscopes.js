"use strict";

// What are the different scopes in JavaScript?

var robbie = 1; // global variable

window.moo = 1; // define moo property on window object

window.robbie // 1

function moo() {
    var foo = 1;
};
console.log(foo); // foo is not defined because it is within the moo() scope

// So, in summary, there is global and function scope. ES6 lets us be more explicit with the 'let' keyword.
