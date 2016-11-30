let symbol = Symbol.for('age');

let person = {
    name: 'Max',
    age: 30
};

function makeAge(person) {
    let ageSymbol = Symbol.for('age');
    person[ageSymbol] = 27;
}

makeAge(person);

console.log(person[symbol]);
console.log(person["age"]);
