function waitASecond(seconds) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            seconds++;
            resolve(seconds);
        }, 1000);
    });
}

waitASecond(0)
    .then(waitASecond)
    .then(function (seconds) {
        console.log(seconds);
    });
