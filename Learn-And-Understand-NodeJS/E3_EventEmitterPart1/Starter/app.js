var Emitter = require('./emitter');

var emtr = new Emitter(); // on() and init()

emtr.on('greet', function() {
    console.log('Somewhere, someone said hello.');
}); // this will run whenever the greet event is emitted

emtr.on('greet', function() {
    console.log('A greeting occurred!');
}); // greet is just added as a property on of our object and the functions are stored in the array

console.log('Hello!');
emtr.emit('greet');