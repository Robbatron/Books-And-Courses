var app = angular.module('mealtrack.services.authentication', []);

app.service('AuthService', function ($q) {
	var self = {
		user: Parse.User.current(),
		login: function (email, password) {
			var d = $q.defer();

			//TODO

			return d.promise;
		},
		signup: function (email, name, password) {
			var d = $q.defer();

			//TODO

			return d.promise;
		},
		'update': function (data)  {
			var d = $q.defer();

			//TODO

			return d.promise;
		}

	};

	return self;
})
;

