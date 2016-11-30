let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Resolved!');
    }, 1000);
});

let promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        //resolve('Resolved!');
        reject('Rejected!');
    }, 2000);
});

Promise.all([promise1, promise2]) // combine promises into one
    .then(function (success) {
        console.log(success);
    })
    .catch(function (error) {
        console.log(error);
    });

// output is rejected! why?
// only if all the promises resolve will the 'all' resolve

Promise.race([promise1, promise2]) // combine promises into one
    .then(function (success) {
        console.log(success);
    })
    .catch(function (error) {
        console.log(error);
    });

// output is resolved, even though the second was rejected
// as long as the quickest promise is resolved, the overall promise resolves
