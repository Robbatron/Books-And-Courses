let promise = new Promise((resolve, reject) => {
    setTimeout(() => { // simulate long running process
        resolve();
    }, 3000);
});

// the 'promise' object has two properties on it...then and catch.

// we use then and catch to register callbacks.

// only logs when the 'resolve' property is used
promise
    .then(() => console.log('finally finished!'))
    .then(() => console.log('i was also ran!!!'))
    .catch(() => console.log('uh oh!'));

// only logs when the 'reject' property is used
promise.catch(() => {
    console.log('caught!');
});

// makes sense!