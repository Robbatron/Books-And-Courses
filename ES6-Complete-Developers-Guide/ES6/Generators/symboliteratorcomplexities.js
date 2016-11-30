// Symbol Iterator is a special object that's included with ES6
// It's job is to tell a for...of loop how it should iterate over an object
// When the for...of loop iterates over an object, it is going to look for a defined symbol.iterator property first

const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
    }
};

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam; // tells the for...of loop that it also needs to walk through iterables with this object
    }
};

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    yield* team.testingTeam;
}

const names = [];
for (let name of engineeringTeam) {
    names.push(name);
}
console.log(names);
