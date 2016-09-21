var myApp = angular.module('myApp', []);


myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {

    $scope.name = 'main';

    $log.main = 'Property from main';
    $log.log($log);

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {

    $scope.num = $routeParams.num || 1;

    $log.second = 'Property from second';
    $log.log($log);
    // When we run the above line, we find both the 'main' and 'second' properties on the $log service, that is because it is a singleton. Which means angular only allows one instance of it, unlike with $scope.

}]);
