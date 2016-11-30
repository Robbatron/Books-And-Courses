// ES5
var expense = {
    type: 'Business',
    amount: '$45 USD'
};

//var type = expense.type;
//var amount = expense.amount;

// But we want to reduce the amount of duplicate code we see

// ES6

const { type, amount } = expense;
// same as creating two const variables 'expense.type' and 'expense.amount'
console.log(type);
console.log(amount);
