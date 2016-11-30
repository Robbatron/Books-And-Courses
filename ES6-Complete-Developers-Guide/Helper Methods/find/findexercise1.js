//Finding Admin Users

//Find the user in the users's array who is an admin.  Assign this user to the variable 'admin'.

var users = [
    {
        id: 1,
        admin: false
    },
    {
        id: 2,
        admin: false
    },
    {
        id: 3,
        admin: true
    }
];

// Classic way...

//var admin;
//for (var i = 0; i < users.length; i++) {
//    if (users[i].admin === true) {
//        admin = users[i];
//        break; // because find() breaks after first result
//    }
//}

// Common way in ES5...

// var admin = users.find(function(user) {
//     return user.admin;
// }

// New way in ES6...
const admin = users.find(user => user.admin);