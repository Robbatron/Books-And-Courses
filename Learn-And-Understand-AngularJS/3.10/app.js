/* NOTE: JavaScript Aside: Dependency Injection

Dependency Injection: Giving a function an object
    - Rather than creating an object inside a function, you pass it to the function

*/

var Person = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

function logPerson(person) {

    console.log(person);
}

var john = new Person('John', 'Doe');
logPerson(john);

var myApp = angular.module('myApp', [])
    .controller('mainController', function ($scope) {
        $scope.msg = 'Hello World!';
    });
