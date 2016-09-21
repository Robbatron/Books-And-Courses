"use strict";

// What's the difference between == and ===?

// One liner: === checks for both type and value

0 === 0 // true
0 !== 1 // true
0 == 0 // true
0 != 1 // true

    '' == '0' // false
0 === '' // false

0 = '' // true
0 == '0' // true

// The above work pretty much as expected, so to demonstrate this whole concept...

0 == '0' // true
0 === '0' // false

// why is the first statement true and the second statement false?

// because for ==, JS tries to intelligently figure out the type, and what it does is...
String(0) = '0'
    //...which then spits out '0' == '0' which of course is true

// In JavaScript, this is called "type coercion"