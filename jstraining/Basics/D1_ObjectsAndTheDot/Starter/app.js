var person = new Object(); // Not the best way to declare an object but it is clear

person["firstName"] = "Tony";
person["lastName"] = "Tiger";

var firstNameProperty = "firstName";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstName);
console.log(person.lastName);

person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]); // Same as dot notation