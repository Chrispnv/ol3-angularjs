goog.provide('messnetz.control.BaseMapSwitcher');

goog.require('goog.dom');
goog.require('goog.events');

/**
 * @constructor
 * @extends {ol.control.Control}
 * @param {Object=} opt_options Control options.
 */
messnetz.control.BaseMapSwitcher = function(opt_options) {

	  var options = opt_options || {};

	  var map = goog.isDef(options['map']) ? options['map'] : undefined;
	  
	  if (goog.isDef(map)){
		  // build html control elements
		  var parentEl = goog.dom.getElement(map.getTarget());
		  
		  var control_container = goog.dom.createDom('div',{'class':'btn-group btn-group-xs basemap-switcher'});
		  goog.dom.appendChild(parentEl, control_container);
		  
		  // add buttons to container
		  var layers = map.getLayers();
		  var controlBtns = [];
		  layers.forEach(function(layer){
			  if (goog.isDef(layer.get('isbaselayer')) && layer.get('isbaselayer')){
				  var name = goog.isDef(layer.get('name')) ? layer.get('name') : 'Unknown';
				  var button = goog.dom.createDom('button',{
					  'class':'btn btn-default',
					  'type':'button',
					  'innerHTML':name
				  });
			
				  // append event behavior
				  goog.events.listen(button, 'click', function(event){
					  var layers = map.getLayers();
					  layers.forEach(function(layer){
						  if (goog.isDef(layer.get('isbaselayer')) && layer.get('isbaselayer')){
							  layer.setVisible(false);
						  }
					  });
					  this.setVisible(true);
				  }, undefined, layer);
				  
				  controlBtns.push(button);
			  } 
		  });
		  
		  // append buttons to parentEl
		  for (var i = 0; i < controlBtns.length; i++){
			  goog.dom.appendChild(control_container, controlBtns[i]);
		  }
	  };
	
	  ol.control.Control.call(this, {
	    element: control_container
	  });
};
goog.inherits(messnetz.control.BaseMapSwitcher, ol.control.Control);