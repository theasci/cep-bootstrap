//@include 'lib/json2.js'
//@include 'models/Indesign.jsx'
//@include 'models/Logger.jsx'
$.strict = true;

/**
 * Base controller functionality
 * @param class instance of a controller, e.g. Utility()
 */
function BaseController(controller){
	this.controller = controller;
		
	this.isEmpty = function(params) {
		return
			params === undefined ||
			params === null ||
			params == '' ||
			(typeof(params) == 'object' &&
			params.length == 0);
	}
	
	this.actionUnknown = function(action) {
		//FIXME Do this in Function('')() ?
		eval("var actionFunc = this.controller."+action);
		return (typeof(actionFunc) !== 'function');
	}
	
	this.run = function(action, params) {
		if(this.actionUnknown(action)) {
			throw new Error(this.controller.name+"()."+action+"() does not exist.");
		}
		
		if(this.isEmpty(params)) {
			return eval("this.controller."+action+"()");
		}
		return eval("this.controller."+action+"(params)");
	}
	
	return this;
}
