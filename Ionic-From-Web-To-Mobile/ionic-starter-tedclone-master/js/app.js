var app = angular.module('tedrssapp', [
	'ionic',
	'ngCordova',
	'tedrssapp.controllers',
	'tedrssapp.services',
	'tedrssapp.filters'
]);


app.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
});

app.config(function ($stateProvider, $urlRouterProvider) {

	//$stateProvider
	//	.state('<name-of-state>', {
	//		url: "<the-url-path>",
	//		templateUrl: "<the-template-to-load>",
	//		controller: '<the-controller-to-use>'
	//	})
	//;

	$urlRouterProvider.otherwise('/');

});



