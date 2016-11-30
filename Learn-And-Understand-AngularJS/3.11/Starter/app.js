var myApp = angular.module('myApp', [])
    .controller('mainController', function ($scope) {
        $scope.name = 'Jane Doe';
        $scope.occupation = 'Coder';
        $scope.getName = function () {
            return 'John Doe';
        }

        console.log($scope);
    });
