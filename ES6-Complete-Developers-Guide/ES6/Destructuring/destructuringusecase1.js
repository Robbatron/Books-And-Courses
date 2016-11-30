function signup(username, password, email, dob, city) {
    // create new user
}

// may accidentally mix up the arguments
signup('myname', 'mypassword', '1/1/1990', 'myemail@example.com', 'New York');

// when you have this long argument list, it becomes taxing to remember which order they need to be passed in as
signup(username, password, email, dob, city);





// So how do we make this easier?





// Now we can wrap the argument list in braces
function signup({username, password, email, dob, city}) {
    // create new user
}

// create an object
const user = {
    username: 'myname',
    password: 'mypassword',
    email: 'myemail@example.com',
    dob: '1/1/1900',
    city: 'New York'
};

// and call the object!
signup(user);

/*** this way, we do not need to get the arguments in the correct order ***/
