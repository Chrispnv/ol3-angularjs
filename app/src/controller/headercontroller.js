goog.provide('ol3angular.controller.HeaderController');

/**
 * AngularJS header controller
 * 
 * @constructor
 * @param {!angular.$scope} $scope 
 * @param {!angular.$location} $location
 * @param {!angular.$route} $route
 * @ngInject
 * @export
 */
ol3angular.controller.HeaderController = function($scope, $location, $route) {
	$scope.activePath = null;
	$scope.$on('$routeChangeSuccess', function(){
		$scope.activePath = $location.path();
	});	
};