"use strict";

typeof (NaN); // "number"
"abc" / 4 // NaN

// NaN compared to ANYTHING else is false. This is in the JS specification.

NaN == 1 // false
NaN == false // false

// Yes...even...
NaN == NaN // false

isNaN(NaN); // true

isNaN("1"); // false
isNaN("A"); // TRUE
// because type coercion is esentially doing this...
isNaN(Number("A")); // true