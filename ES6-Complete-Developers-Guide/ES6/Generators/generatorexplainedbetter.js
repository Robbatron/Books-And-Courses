function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

// every single time we yield a value it creates a single run of our 'for...of' loop
const myColors = [];
for (let color of colors()) {
    myColors.push(color);
}
console.log(myColors);

/*** When we use generators and 'for...of' in tandem, we can build objects that can iterate through any data structure that we can possibly imagine ***/

const engineeringTeam = {
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave'
};

function* teamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
}

const names = [];
for (let name of teamIterator(engineeringTeam)) {
    names.push(name);
}
console.log(names);
