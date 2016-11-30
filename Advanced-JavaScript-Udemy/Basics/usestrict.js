// Strict mode allows you to place a program (or a function) in a strict operating context.
// - In a nutshell, it makes debugging easier.
//   - In other situations where JS would "fail silently", it will now generate errors or throw exceptions

// Q. How do you enable "strict mode" in a JS file?
// A. "use strict" ... IT IS A STRING!


// If you are working with legacy code there actually is a way to switch it on for certain parts of the program...

// Not struct mode...
function newCode() {
    "use strict";
    // Strict mode...
}

// If you consider the below...
"use strict";

var theVal = 0;
//
thVal = 1;
//
if (theVal > 0) {
    console.log("Hello!");
}

// ... this will not log "Hello" because of the syntax error when trying to set "theVal" to 1. Using strict will tell us that "thVal" is not defined.




// "use strict" also lets you know when you are using reserved keywords, such as...
var
let = 1;
// this will throw -> "Unexpected strict mode reserved word"

// You also cannot delete variables or functions under "use strict"
var foo = 1;
delete foo;

function moo() {};
delete moo;



// eval
// eval lets you evaluate JS expressions by just passing in a string.
// "use strict" will not let variables be reassigned within the eval block.

evaul("var a = 1");
console.log(a);
