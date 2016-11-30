let outerName = 'Anna';
let age = 25;

let dynamicAgeField = "dynamicAge";

let obj = {
    "name": 'Max',
    outerName,
    age, // do not need to add value, it will find the age in outer scope
    [dynamicAgeField]: 28, // when dynamic, you need to specify a value
    "greet me" () { //same as greetMe: function() { ... }
        console.log(this.name + ', ' + this.age);
        console.log(this.outerName + ', ' + this.dynamicAge);
    }
};

console.log(obj[dynamicAgeField]);
// obj["greet me"]();