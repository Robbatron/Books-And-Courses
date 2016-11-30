weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });

    $scope.submit = function () {
        $location.path("/forecast");
    };

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', 'weatherService', function ($scope, $resource, $routeParams, cityService, weatherService) {

    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';
    var weatherResult = weatherService.GetWeather($scope.city, $scope.days).then(function (data) {
        console.log('ctrl' + data);
    })



    $scope.convertToDate = function (dt) {
        return new Date(dt * 1000);
    }

}]);
