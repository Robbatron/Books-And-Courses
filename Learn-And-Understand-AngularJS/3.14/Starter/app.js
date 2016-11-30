var myApp = angular.module('myApp', ['ngMessages', 'ngResource'])
    .controller('mainController', function ($log, $scope, $filter, $resource) {
        $scope.msg = 'Hello World!';

        //        console.log($scope);
        //        console.log($log);
        //        console.log($filter);
        //        console.log($resource);

        //        $log.log('Hello!');
        //        $log.info('This is some information.');
        //        $log.warn('Warning!');
        //        $log.debug('Some debug information while writing my code.');
        //        $log.error('This was an error!!!');

        $scope.name = 'John';
        $scope.formattedName = $filter('uppercase')($scope.name);

        $log.info($scope.name);
        $log.info($scope.formattedName);
    });
