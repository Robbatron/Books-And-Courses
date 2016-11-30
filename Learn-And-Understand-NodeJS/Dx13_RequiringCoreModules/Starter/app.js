var util = require('util');

var name = 'Tony';
var greeting = util.format('Hey, %s!', name);
util.log(greeting); // adds timestamp to our greeting 