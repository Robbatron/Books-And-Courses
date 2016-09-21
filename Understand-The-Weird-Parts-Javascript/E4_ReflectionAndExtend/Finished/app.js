var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;

for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
}

var jane = {
    address: '111 Main St',
    getFormalAddress: function() {
        return this.address + ', ' + 'City, ST';
    }
}

for (var prop in jane) {
    if (jane.hasOwnProperty(prop)) {
        typeof(jane[prop]) == 'function' ?
            console.log(prop + ': ' + jane[prop]()) :
            console.log(prop + ': ' + jane[prop]);
    }
}

var jim = {
    getFirstName: function() {
        return firstname;
    }
}

_.extend(john, jane, jim);

console.log(john);