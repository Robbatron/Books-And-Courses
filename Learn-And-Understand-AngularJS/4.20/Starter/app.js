/* NOTE: Watchers and the Digest Loop

- AngularJS compares a value with its previous value and if it has changed then a change event is fired. This is dirty checking in a nutshell.

- In AngularJS, a digest is the cycle that performs dirty checking. This is initiated via $digest().

- If something happens outside of AngularJS, you need to let AngularJS know to execute a digest cycle and you do that via $apply which calls $digest.

- $digest is the "heartbeat" of an AngularJS app. It processes all watchExpressions for the current scope and its children and fires a listener when a watchExpressions comes back "dirty" (old value does not equal new value).

*/


var myApp = angular.module('myApp', [])
    .controller('mainController', ['$scope', '$filter', '$timeout',
        function ($scope, $filter, $timeout) {

            $scope.handle = '';
            $scope.lowerCaseHandle = function () {
                return $filter('lowercase')($scope.handle);
            }

            $scope.$watch('handle', function (newValue, oldValue) {
                console.info('Changed!');
                console.log("Old: " + oldValue);
                console.log("New: " + newValue);
            });

            $timeout(function () {
                $scope.handle = 'newTwitterHandle';
                console.log("Scope changed!");
            }, 3000);

}]);
