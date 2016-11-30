var myApp = angular.module('myApp', [])
    .controller('mainController', ['$scope', '$filter', function ($scope, $filter) {

        $scope.handle = '';
        $scope.lowerCaseHandle = function () {
            return $filter('lowercase')($scope.handle);
        }

        $scope.characters = 5;

        $scope.rules = [
            {
                rulename: "Must be 5 characters"
            },
            {
                rulename: "Must not be used elsewhere"
            },
            {
                rulename: "Must be cool"
            }
        ];

        console.log($scope.rules);

}]);
