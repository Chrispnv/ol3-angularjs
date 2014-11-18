goog.provide('ol3angular.directive.SimpleMapDirective');

/**
 * @constructor
 */
ol3angular.directive.SimpleMapDirective = function($location){
	
	// bind the link with the scope of this object
	this.link = this.link.bind(this);

	this.location = $location;
	
};

/**
 * @param {!angular.$location}
 * @ngInject
 * @return {ol3angular.directive.SimpleMapDirective}
 * @static
 */
ol3angular.directive.SimpleMapDirective.factory = function($location) {
	var dir = new ol3angular.directive.SimpleMapDirective($location);
	return {
		link: dir.link,
		template: '<div class="container content map-container"><div id="map" class="ol3-angularjs-map"></div></div>'
	};
}

/**
 * This is the function which links the directive to an html element. The map code should be placed within it.
 * @param {Object} scope Is an Angular scope Object
 * @param {Object} elem Is the jqLite-wrapped element that this directive matches
 * @param {Object} attrs Is a hash object with key-value pairs of normailized attribute names and their corresponding attribute
 * 						values.
 */
ol3angular.directive.SimpleMapDirective.prototype.link = function(scope, elem, attrs) {
	
	if (goog.DEBUG) {
		console.log('Load directive ...');
	};
	
	var map = new ol.Map({
		layers: [
		    new ol.layer.Tile({
		    	source: new ol.source.Stamen({
		    		layer: 'watercolor'
		    	})
		    }),
		    new ol.layer.Tile({
		    	source: new ol.source.Stamen({
		    		layer: 'terrain-labels'
		    	})
		    })
		],
		renderer: ['canvas'],
		target: 'map',
		view: new ol.View({
			center: ol.proj.transform(
				[-122.416667, 37.783333], 'EPSG:4326', 'EPSG:3857'),
		    zoom: 12
		})
	});
};

