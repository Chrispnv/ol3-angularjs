goog.provide('ol3angular.run.Base');

/**	
 * @param {!angular.$rootScope} $rootScope 
 * @param {!angular.$route} $route
 * @param {!angular.$location} $location
 * @param {!angular.$anchorScroll} $anchorScroll
 * @ngInject
 */
ol3angular.run.Base = function($rootScope, $route, $location, $anchorScroll){
   //Bind the `$locationChangeSuccess` event on the rootScope, so that we dont need to 
   //bind in induvidual controllers.

	$rootScope.$on('$locationChangeSuccess', function(event) {
	    $rootScope.actualLocation = $location.path();
	    $rootScope.actualHash = $location.hash();
	    event.preventDefault();
	});

	$rootScope.$watch(function () {return $location.hash()}, function (newHash, oldHash){		
		console.log('New hash: ' + newHash + ', old hash: ' + oldHash + ', actual hash: ' + $rootScope.actualHash);
		
		if ($rootScope.actualHash === newHash){
			$anchorScroll();
		};
	});
};