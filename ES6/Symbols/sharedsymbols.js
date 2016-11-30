let symbol1 = Symbol.for('age');
let symbol2 = Symbol.for('age');

let person = {
    name: 'Max'
};

function makeAge(person) {
    let ageSymbol = Symbol.for('age');
    person[ageSymbol] = 27;
}

makeAge(person);

console.log(person[symbol1]);
