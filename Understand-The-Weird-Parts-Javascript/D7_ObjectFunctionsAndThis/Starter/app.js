function a() {
	console.log(this);
	this.newVariable = 'hello';
}

var b = function() {
	console.log(this);
}

a(); // invoking 'a' puts newVariable on the global object
console.log(newVariable);

b();
var c = {
	name: 'The c object',
	log: function() {
		// When a function is a method of an object, the 'this' keyword
		// points to the containing object ('c' in this case). However, internal 
		// functions have a problem when using 'this', so setting a 
		// variable equal to 'this' circumvents these problems.
		var self = this;

		self.name = 'Updated c object';
		console.log(self);

		var setName = function(newName) {
			self.name = newName;
		}
		setName('Update again! The c object');
		console.log(self);
	}
}

c.log();





