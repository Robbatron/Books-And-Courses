// Callback: A function passed to some other function which we assume
//           will be called at some point.
function greet(callback) {
    console.log('Hello!');
    var data = {
        name: ['John Doe', 'Jane Doe'],
    };
    callback(data);
}

greet(function(data) {
    console.log('The callback was invoked!');
    console.log(data);
});

greet(function(data) {
    console.log('A different callback was invoked!');
    console.log(data.name[0]);
});