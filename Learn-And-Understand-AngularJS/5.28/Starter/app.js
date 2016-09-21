var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })

    .when('/second/', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

    .when('/second/:num', {
        /*

        The colon is pattern matching, so the second controller will
        take whatever is there and assign it to 'num'

        ex. /5.28/Starter/index.htm#/second/6
        */
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

});

myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {

    $scope.name = 'main';

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {

    $scope.num = $routeParams.num || 1;

}]);
