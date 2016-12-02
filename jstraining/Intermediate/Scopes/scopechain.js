"use strict";

// What is the scope chain?

// The scope chain is defined by how the program is written in the file

function foo() {
    console.log(myVar);
}

function goo() {
    var myVar = 1;

    foo();

    // Can the foo function now see myVar?
    // No, because the scope chain is defined lexically
    // This will throw an error
}

goo();





// But if we do this...
function foo() {
    console.log(myVar);
}

function goo() {
    var myVar = 1;

    function foo() {
        console.log(myVar);
    }
    foo();

    // Can the foo function see myVar now? Yes.
    // No, because the scope chain is defined lexically
}
