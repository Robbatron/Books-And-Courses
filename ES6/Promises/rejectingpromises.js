let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('Failed!'); // Don
    }, 1500);
});

promise.then(function (value) {
    console.log(value);
}, function (error) { // nothing will show up when failed without another function that handles 'reject'
    console.log(error);
});
