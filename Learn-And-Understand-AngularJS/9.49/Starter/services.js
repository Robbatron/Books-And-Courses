// SERVICES
weatherApp.service('cityService', function () {

    this.city = "New York, NY";

});

weatherApp.service('weatherService', ['$resource', function ($resource) {

    this.GetWeather = function (city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=b9af3621f1c6aa359f80bd22a532b584", {
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: "JSONP"
            }
        });

        return weatherAPI.get({
            q: city,
            cnt: days
        });
    }

}]);
