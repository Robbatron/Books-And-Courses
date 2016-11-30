/* NOTE: Directives

Directive: An instruction to AngularJS to manipulate a piece of the DOM.
    - This could be 'add a class', 'hide this', 'create this', etc.

*/

var myApp = angular.module('myApp', [])
    .controller('mainController', ['$scope', '$filter', function ($scope, $filter) {

        $scope.handle = '';
        $scope.lowerCaseHandle = function () {
            return $filter('lowercase')($scope.handle);
        }

        $scope.tb = document.getElementById('name');
        $scope.tb.addEventListener('keypress', function () {
            console.log('pressed');
        });

}]);
