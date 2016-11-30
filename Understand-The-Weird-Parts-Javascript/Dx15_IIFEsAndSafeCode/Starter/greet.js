var greeting = 'Hola';

// Below is from app.js...
// On compilation, these scripts get stacked...
// To prevent collisions, each function can use
// its own Execution Context

// (function(name) {
//     var greeting = 'Hello';
//     console.log(greeting + ' ' + name);
    
// }('John'));