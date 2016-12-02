"use strict";

// What is an IIFE and why might you use it?

// To demonstrate this, I would need to create multiple files then try to insert them into an HTML page, and show how the global variables and functions might have naming conflicts. But we don't need to go through that trouble for this explanation...

// Instead of ensuring that no variables lie on the global scope, we can use an IIFE to encapsulate even the variables that need to be global.

(function () {
    var thing = {
        'hello': 'other'
    };
    console.log('other: ', thing);
})(); // dog balls --Douglas Crawford
otherScope();
