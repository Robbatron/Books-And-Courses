/*

Interpolation: Creating a string by combining strings and placeholders.
    - " 'My name is' + name " is interpolated, and results in 'My name is Robbie'

*/



var myApp = angular.module('myApp', [])
    .controller('mainController', ['$scope', '$interval', function ($scope, $interval) {

        $scope.name = 'Robbie';

        $interval(function () {
            $scope.name = 'Everybody';
        }, 3000);
    }]);
