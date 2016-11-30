var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })

    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

});

myApp.service('nameService', function () {

    var self = this;
    this.name = 'John Doe';

    this.nameLength = () => {
        self.name.length;
    }

});

myApp.controller('mainController', ['$scope', '$log', 'nameService', function ($scope, $log, nameService) {

    $scope.name = nameService.name;

    $scope.$watch('name', function () {
        nameService.name = $scope.name;
    });

    $log.log(nameService.name);
    $log.log(nameService.nameLength());
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function ($scope, $log, $routeParams, nameService) {

    $scope.num = $routeParams.num || 1;

    $scope.$watch('name', function () {
        nameService.name = $scope.name;
    });

    $scope.name = nameService.name;

}]);
