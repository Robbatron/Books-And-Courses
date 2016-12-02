"use strict";

var robbie = {
    checkThis: function () {
        var checkOther = function () {
            console.log(this);
        }.bind(this); // now we bound the above 'this' to the robbie object by using bind
        checkOther();
    }
}
robbie.checkThis();


// function a(param1, param2) {
//     console.log(this);
// };
//a(); // in js, functions are actually objects

// console.log(a.name); // this works, actually, because the 'a' function becomes an object which stores 'a' as the name property.
// console.log(a.length); // 2, because two arguments are passed in.

// a.moo = 1;
// console.log(a.moo); // 1, because moo was added as a property to the a function (object)
// console.log(a.toString()); // prints out the whole function as a string!

//a.call(1); // now you can define what 'this' means

// function a(b,c,d) {
//     console.log(this);
//     console.log(b);
//     console.log(c);
//     console.log(d);

// }

// a.call(1,2,3,4);

// a.apply(1,[2,3,4]);

// Q. Why would you use call as oppossed to apply?
// A. Use call unless the function takes a variable number of parameters.

// function sum() {
//     var total = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }

// var x = sum(null,1,2,3);
// console.log(x);

// var things = [1,2,3,4,53,2,4,5,6,1];
// var x = sum.apply(null, things);
// console.log(x);

var a = function () {
    console.log(this);
}.bind(1); // now using 1 as 'this'
a(); // will log 1, because we set 'this' equal to 1 with bind