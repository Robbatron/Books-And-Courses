var app = angular.module('mealtrack.controllers.account', []);

/*********************************************************************
 * AccountCtrl
 *********************************************************************/
app.controller('AccountCtrl', function ($scope, $state, AuthService) {

	$scope.formData = {
		name: AuthService.user.attributes.name,
		email: AuthService.user.attributes.email
	};

	$scope.submit = function () {
		console.log("AccountCtrl::submit");
		//TODO
	};


	$scope.logout = function () {
		console.log("AccountCtrl::logout");
		//TODO
	};
});
