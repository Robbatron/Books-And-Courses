// require returns module.exports

var greet = require('./greet');
// Output:
//  [Function]
//  {}

var greet2 = require('./greet2');
// Output:
//  { greet: [Function] }
//  { greet: [Function] }
greet2.greet(); // can call because we have added the method to the object

// this shows that you can use exports if you change the property

// JUST USE MODULE.EXPORTS DAMMIT!!!