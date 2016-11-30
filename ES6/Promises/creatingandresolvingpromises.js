// Promise: An object that helps with ansynchronous tasks.
// - They give us a promise that they will give us back data. Now or sometime in the future.
// - Put function on promises to do something with the data whenever we get it back.
// - Popular because they allow us to escape callback hell.

let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Done!');
    }, 1500);
});

promise.then(function (value) {
    console.log(value);
});
