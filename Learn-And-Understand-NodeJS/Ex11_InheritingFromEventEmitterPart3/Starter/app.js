/* jslint node: true */
/* jshint esversion: 6 */
'use strict';
var Greetr = require('./greetr');

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');