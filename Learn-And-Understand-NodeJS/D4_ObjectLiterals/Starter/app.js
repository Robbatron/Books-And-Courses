var person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function() {
        console.log('Hello, ' + this.firstName + ' ' + this.lastName);
    }
};

person.greet();

console.log(person['firstName']);
