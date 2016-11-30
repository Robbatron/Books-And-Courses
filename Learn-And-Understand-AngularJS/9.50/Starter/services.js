weatherApp.service('cityService', function () {

    this.city = "New York, NY";

});

weatherApp.service('weatherService', ['$resource', function ($resource) {

    this.GetTemp = function (deg) {
        console.log(deg);
        return function convertToFahrenheit(deg) {

            return Math.round((1.8 * (degK - 273)) + 32);
        }

    }
    var that = this;
    this.GetWeather = function (city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=b9af3621f1c6aa359f80bd22a532b584", {
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: "JSONP"
            }
        });

        var result = weatherAPI.get({
            q: city,
            cnt: days
        });

        return result.$promise.then(function (data) {
            console.log(data.list[0].temp.day);
            return data;
        });

        //        return weatherAPI.get({
        //            q: city,
        //            cnt: days
        //        });
    }



            }]);
