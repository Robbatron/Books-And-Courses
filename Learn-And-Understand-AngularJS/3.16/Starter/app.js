/*

Minification: Shrinking the size of files for faster download
    - We normally add '.min' to the name of the file. So 'file.js' becomes 'file.min.js' so we can tell the difference

You cannot minify Angular if the dependencies are written like in the previous chapters. This is because services like '$scope' and '$log' will get renamed. However, minifiers do not modify the values of strings, so below is introduced a new syntax whereby services can be injected using strings and passing them as arguments into a function.

*/

var myApp = angular.module('myApp', [])
    .controller('mainController', ['$scope', '$log', function ($scope, $log) {
        // $scope and $log are passed as strings. ORDER MATTERS WHEN USING THIS SYNTAX.
        $log.info($scope);
    }]);

// Minified
//var myApp=angular.module("myApp",[]).controller("mainController",["$scope","$log",function(o,l){l.info(o)}]);
