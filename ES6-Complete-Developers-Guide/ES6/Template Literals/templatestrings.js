// ES5
function getMessage() {
    const year = new Date().getFullYear();
    return "The year is " + year;
}
console.log(getMessage());

// ES6
function getYear() {
    const year = new Date().getFullYear();
    return `The year is ${year}`;
}
console.log(getYear());

// We can also do work or put expressions in a template literal
function getYearTimesTwo() {
    const year = new Date().getFullYear();
    return `The year is ${year * 2}`;
}
console.log(getYearTimesTwo());

function getYearExpression() {
    const year = new Date().getFullYear();
    return `The year is ${new Date().getFullYear()}`;
}
console.log(getYearExpression());