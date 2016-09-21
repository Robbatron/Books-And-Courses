// What's Your Balance?

// Find the account with a balance of 12 and assign it to the variable 'account'.

var accounts = [
    {
        balance: -10
    },
    {
        balance: 12
    },
    {
        balance: 0
    }
];

// How the dinosaurs did it...

//var account;
//for (var i = 0; i < accounts.length; i++) {
//    if (accounts[i].balance === 12) {
//        account = accounts[i];
//    }
//}


// ES5...
//var account = accounts.find(function(acc) {
//    return acc.balance === 12;
//});


// ES6...
const account = accounts.find(acc => acc.balance === 12);