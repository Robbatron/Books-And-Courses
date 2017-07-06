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