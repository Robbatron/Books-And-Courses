var EventEmitter = require('events');
var util = require('util');

function Greetr() {
	EventEmitter.call(this);
	this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function() {
	console.log(this.greeting);
	this.emit('greet');
};

var greeter1 = new Greetr();

greeter1.on('greet', function() {
	console.log('Someone greeted!');
});

greeter1.greet();