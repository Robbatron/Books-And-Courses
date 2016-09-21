// Purpose is to search through an array and look for an element in the array

// for loop example
var users = [
    {
        name: 'Jill'
    },
    {
        name: 'Alex'
    },
    {
        name: 'Bill'
    }
];

var user;

for (var i = 0; i < users.length; i++) {
    if (users[i].name === 'Alex') {
        user = users[i];
        break; // stop after first result
    }
}
console.log(user);

// find method
users.find(function (user) {
    return user.name === 'Alex';
});

// ** will only return first result

console.log(user);