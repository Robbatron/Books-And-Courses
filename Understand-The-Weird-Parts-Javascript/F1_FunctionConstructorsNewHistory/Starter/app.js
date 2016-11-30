function Person(firstName, lastName) {
    console.log(this); // an empty object, we have not yet added the parameters
    this.firstName = firstName;
    this.lastName = lastName;
    console.log('This function is being invoked');

    // return {
    //     greeting: "I got in the way"
    // }
}

Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
}

var john = new Person("John", "Snow");
console.log(john.getFullName());

// 'new' creates an empty object
// 'Person()' is just invoking the Person function
// since 'new' creates an empty object, the 'this' keyword 
// from 'Person' now points to it
function Clone(first, last) {
    this.first = first || "Jango",
    this.last = last || "Fett"
}

var jango = new Clone();
console.log(jango);

var clone = new Clone('Clone', 'Trooper');
console.log(clone);

var storm = new Clone('Storm', 'Trooper');
console.log(storm);