var app = angular.module('tedrssapp.controllers', []);

app.controller('FeedCtrl', function ($scope, $ionicLoading, FeedService) {
	console.log("Loading FeedCtrl");

	$ionicLoading.show({template:'Loading feed...'});
	$scope.feed = FeedService;
	$scope.feed.loadFeed().then(function () {
		$ionicLoading.hide();
	});

	$scope.doRefresh = function () {
		FeedService.loadFeed().then(function () {
			$scope.$broadcast('scroll.refreshComplete');
		});
	};
});

app.controller('PostCtrl', function ($scope, $stateParams, $window, $cordovaSocialSharing, FeedService) {
	console.log("Loading PostCtrl");

	$scope.postId = $stateParams.id;
	$scope.post = FeedService.getEntry($scope.postId);

	$scope.share = function () {
		console.debug("Sharing post");
		$cordovaSocialSharing.share($scope.post.contentSnippet, $scope.post.title, $scope.post.thumbnail, $scope.post.link)
	};

	$scope.readMore = function () {
		console.debug("Read more post");
		$window.open($scope.post.link, "_system", "location=yes");
	};

});
