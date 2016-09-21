// Fat arrow functions solve 'lexical this'

// Basically, fat arrow makes 'this' behave the way we expect it to
// and eliminate the need for hacks such as 'that === this' or '.bind(this)'

const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function () {
        return this.members.map(member => {
            return `${member} is on team ${this.teamName}`
        });
    }
};

console.log(team.teamSummary());