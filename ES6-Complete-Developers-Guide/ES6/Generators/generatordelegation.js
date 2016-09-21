const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill'
};

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave'
};

function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    // yield* is a "trap-door" for the for...of loop. now the loop will fall into the TestingTeamIterator generator.
    yield* TestingTeamIterator(team.testingTeam); // "Amanda" and "Bill" are now added.
}

function* TestingTeamIterator(team) {
    yield team.lead;
    yield team.tester;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}
console.log(names);
