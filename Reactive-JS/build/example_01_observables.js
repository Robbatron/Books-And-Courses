"use strict";

var _Rx = require("rxjs/Rx");

var _Rx2 = _interopRequireDefault(_Rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// START PART 1 --------------------

/* Promise syntax */
// const promise = new Promise((resolve, reject) => {
//     resolve("hey"); // Always outputs because promises are EAGER!!!
// });
// promise.then(item => console.log(item));

/* Observable syntax */
// AN OBSERVABLE IS SIMPLY A GENERATOR FUNCTION THAT ACCEPTS AN OBSERVER AND INVOKES THE NEXT OR COMPLETE METHODS ON IT
// const simple$ = new Rx.Observable(observer => {
//     console.log("Generating observable"); 
//     // this doesn't print out because observables are LAZY!!!
//     // observables do not run your generator function until they have a subscription!
//     setTimeout(() => {
//         observer.next("An item!");
//         setTimeout(() => {
//             observer.next("Another item!");
//             observer.complete();
//         }, 1000);
//     }, 1000);
// });

// const error$ = new Rx.Observable(observer => {
//     observer.error(new Error("WHOA!"));
// });

// Subscription - actually does something with the data
// error$.subscribe(
//     item => console.log(`one.next ${item}`),    // next
//     error => console.log(`one.error ${error}`), // error
//     () => console.log("one.complete")           // complete
// );

// This is SUPER important. Any time we subscribe to the observable, it re-runs the generator function!!!
// setTimeout(() => {
//     simple$.subscribe({
//         next: item => console.log(`two.next ${item}`),
//         error(error) {
//             console.log(`two.error ${error}`);
//         },
//         complete: function() {
//             console.log("two.complete");
//         }
//     });
// }, 3000);

// END PART 1 --------------------

// START PART 2 --------------------
function createSubscriber(tag) {
    return {
        next: function next(item) {
            console.log(tag + ".next " + item);
        },
        error: function error(_error) {
            console.log(tag + ".error " + (_error.stack || _error));
        },
        complete: function complete() {
            console.log(tag + ".complete");
        }
    };
}

function createInterval$(time) {
    return new _Rx2.default.Observable(function (observer) {
        var index = 0;
        var interval = setInterval(function () {
            console.log("Generating " + index);
            observer.next(index++);
        }, time);

        return function () {
            clearInterval(interval);
        };
    });
}

// operators are nothing more than wrappers around observables
// here we will create a take$ operator
function take$(sourceObservable$, amount) {
    return new _Rx2.default.Observable(function (observer) {
        var count = 0;
        var subscription = sourceObservable$.subscribe({
            next: function next(item) {
                observer.next(item);
                if (++count >= amount) observer.complete();
            },
            error: function error(_error2) {
                observer.error(_error2);
            },
            complete: function complete() {
                observer.complete();
            }
        });

        return function () {
            return subscription.unsubscribe();
        };
    });
}

var everySecond$ = createInterval$(1000);
var firstFiveSeconds$ = take$(everySecond$, 5); // using our operator to run everySecond$ only 5 times
var subscription = firstFiveSeconds$.subscribe(createSubscriber("one"));