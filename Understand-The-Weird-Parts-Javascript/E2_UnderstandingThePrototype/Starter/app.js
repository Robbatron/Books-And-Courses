var person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

var john = {
    firstName: 'John',
    lastName: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstName);

var jane = {
    firstName: 'Jane'
}

jane.__proto__ = person; // assign to john for 'Doe'
console.log(jane.getFullName());