const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary: function () {
        // var that = this; // or we can use bind
        return this.members.map(function (member) {
            return `${member} is on team ${this.teamName}`;
        }.bind(this));
    }
};

// Below will return "Jane/Bill is on team undefined"
console.log(team.teamSummary());