// Finding Submitted Users

//Given an array of users, return 'true' if every user has submitted a request form.  Assign the result to the variable 'hasSumbmitted'.

var users = [
    {
        id: 21,
        hasSubmitted: true
    },
    {
        id: 62,
        hasSubmitted: false
    },
    {
        id: 4,
        hasSubmitted: true
    }
];

// answer...
var hasSubmitted = users.every(user => user.hasSubmitted);