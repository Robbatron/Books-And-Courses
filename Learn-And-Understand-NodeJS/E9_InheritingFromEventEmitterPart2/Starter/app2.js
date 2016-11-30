var util = require('util');

function Person() {
    this.firstName = 'John';
    this.lastName = 'Doe';
}

Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

function Policeman() {
    Person.call(this); // inherits only adds the prototype, we need to run the Person function constructor
    this.badgeNumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();