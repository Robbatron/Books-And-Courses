var firstName = 'Jane';

//IIFE still runs first and does not modify firstName outside of scope.
(function (lastName) {
    var firstName = 'John';
    console.log(firstName + ' ' + lastName);
}('Doe'));

console.log(firstName);