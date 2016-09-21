const AGES = [27, 24, 31];

console.log(AGES);

AGES.push(25);

console.log(AGES); // will this error? No!
// Why? Because we're not changing the pointer,
// we're only changing the value to which the pointer points.

const OBJ = {
    age: 27
};

console.log(OBJ); // logs 27 as age property

OBJ.age = 30;

console.log(OBJ); // logs 30 as age property
