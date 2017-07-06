function User(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age; 
  this.gender = gender;
}

const userOne = new User('Robbie', 'Delfs', 25, 'Male');
console.log(userOne);

const userTwoHundred = new User('Mandy', 'Delfs', 26, 'Female');
console.log(userTwoHundred);

User.prototype.emailDomain = '@facebook.com';
console.log(userOne.emailDomain);

User.prototype.getEmail = function () {
  return `${this.firstName}.${this.lastName}${this.emailDomain}`;
}
console.log(userTwoHundred.getEmail());

// if we want our constructor function instances to all have a mutual property or method, we can put them on the prototype to keep the instances more lean and cleaner