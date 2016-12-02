function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');

}

/*	
	Putting the getFullName method on the prototype makes it available to all objects.
	This saves a lot of space in memory since the method does not need to be created and 
	added to every object that calls 'Person'.
*/
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}


var john = new Person('John', 'Doe');
console.log(john);
console.log(john.getFullName());

var jane = new Person('Jane', 'Doe');
console.log(jane);
console.log(jane.getFullName());

Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;
}

console.log(john.getFormalFullName());