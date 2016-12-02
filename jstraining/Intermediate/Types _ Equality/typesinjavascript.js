"use strict";

/* What are the different types in JavaScript

- Boolean: True or false
- Number: Integer (1, 1.0)
- String: "a", 'a'
- Null: null 
    - typeof(null) will incorrectly return object
- Undefined: undefined
- Object: either as literal {} or instantiating an object new Object()


// Q. What is the difference between a Dynamically typed language (like JavaScript) and a Statically typed language (like Java)?

// A. Dynamic: The type of variable is determined at runtime
      Static: We determine the types when writing our code

    String a = 'moo';
    a = 1; //Error
    
    var a = 'moo';
    typeof(a);
    a = 1;
    typeof(a);

// Q. What is the difference between null and undefined?

// A. Undefined: means "no initialized variables". Used by JS to indicate no           value.

      Null: used by programmers to indicate no value. The JS engine will never   set anything to null.

var a;
console.log(a); // undefined

var a = null;
console.log(a);

*/