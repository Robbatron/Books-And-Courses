//Handling Permissions with Filter

//Filter the array of users, only returning users who have admin level access.  Assign the result to the variable 'filteredUsers'. Don't forget to use the 'return' keyword in the function!


var users = [
    {
        id: 1,
        admin: true
    },
    {
        id: 2,
        admin: false
    },
    {
        id: 3,
        admin: false
    },
    {
        id: 4,
        admin: false
    },
    {
        id: 5,
        admin: true
    },
];

var filteredUsers = users.filter(function (user) {
    return user.admin === true;
});


// Are you not entertained!?!?