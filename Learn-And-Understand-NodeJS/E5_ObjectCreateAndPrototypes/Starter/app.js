var person = {
    firstName: '',
    lastName: '',
    greet: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

var john = Object.create(person); // this puts the parameters of person on the 'john' prototype
john.firstName = 'John'; // then you can always put params directly on the object so that 
john.lastName = 'Doe'; // JS finds it and doesn't have to go down the prototype chain

var jane = Object.create(person); // this puts the parameters of person on the 'john' prototype
jane.firstName = 'Jane'; // then you can always put params directly on the object so that 
jane.lastName = 'Doe'; // JS finds it and doesn't have to go down the prototype chain

console.log(john.greet());
console.log(jane.greet());