import Rx from "rxjs/Rx";

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
        next(item) { console.log(`${tag}.next ${item}`); },
        error(error) { console.log(`${tag}.error ${error.stack || error}`); },
        complete() { console.log(`${tag}.complete`); }
    };
}

function createInterval$(time) {
    return new Rx.Observable(observer => {
        let index = 0;
        let interval = setInterval(() => {
            console.log(`Generating ${index}`);
            observer.next(index++);
        }, time);

        return () => {
            clearInterval(interval);
        };
    });
}

// operators are nothing more than wrappers around observables
// here we will create a take$ operator
function take$(sourceObservable$, amount) {
    return new Rx.Observable(observer => {
        let count = 0;
        const subscription = sourceObservable$.subscribe({
            next(item) { 
                observer.next(item);
                if (++count >= amount)
                    observer.complete();
            },
            error(error) { observer.error(error); },
            complete() { observer.complete(); }
        });
        
        return () => subscription.unsubscribe();
    });
}

const everySecond$ = createInterval$(1000);
const firstFiveSeconds$ = take$(everySecond$, 5); // using our operator to run everySecond$ only 5 times
const subscription = firstFiveSeconds$.subscribe(createSubscriber("one"));