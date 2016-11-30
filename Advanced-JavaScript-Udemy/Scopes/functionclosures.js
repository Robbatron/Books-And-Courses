"use strict";


function sayHello(name) {
    var text = 'Hello ' + name;
    return function () {
        // This is a closure because it contains references to the values in the outer scope.
        // REMEMBER: Closures can refer to variables in outer scopes.
        // REMEMBER: It can refer to those variables even after those outer functions have returned.
        console.log(text);
    }
};

var sayRobbie = sayHello("Robbie");
sayRobbie();

// Interview question that is very very very commonly used!

var foo = [];
for (var i = 0; i < 10; i++) {
    foo[i] = function () {
        return i;
    };
}
console.log(foo[0])); // 10
console.log(foo[1])); // 10
console.log(foo[2])); // 10

// Q. Why are they all 10?

// A. Closures just point to the *CURRENT* value of whatever variable was used in it's function body. When the closure is created it doesn't get a copy of i, but points to the actual value of i in the scope.

// Q. How can we change this behavior?

// A. Reference that variable internally within a closure.

var foo = [];
for (var i = 0; i < 10; i++) {
    (function (y) {
        foo[y] = function () {
            return y;
        };
    })(i);
}
