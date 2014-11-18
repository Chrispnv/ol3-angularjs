goog.provide('ol3angular.app.Main');

goog.require('goog.events');
goog.require('ol3angular.controller.HeaderController');
goog.require('ol3angular.directive.SimpleMapDirective');
goog.require('ol3angular.run.Base');

/**
 * @constructor
 * @export
 */
ol3angular.app.Main = angular.module('mainApp', ['ngRoute']);

//configure routes
ol3angular.app.Main.config(['$routeProvider',
    function($routeProvider) {
		$routeProvider.
			when('/simple-map', {
				templateUrl: 'html/simple-map.html'
			}).
			when('/contact', {
				templateUrl: 'html/contact.html'
			}).
			when('/underconstruction', {
				templateUrl: 'html/underconstruction.html'
			}).
			otherwise({
				redirectTo: '/map'
			})
	}
]);

ol3angular.app.Main.controller('HeaderController', ol3angular.controller.HeaderController);
ol3angular.app.Main.directive('simpleMapDirective', ol3angular.directive.SimpleMapDirective.factory);
ol3angular.app.Main.run(ol3angular.run.Base);
	

