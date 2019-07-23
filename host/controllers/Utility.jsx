//@include 'controllers/BaseController.jsx'

/**
 * Simple utility controller
 */
function Utility(){
	this.name = 'Utility';
	
	this.wordCount = function() {
		return Indesign().wordCount();
	}

	this.charCount = function() {
		return Indesign().charCount();
	}

	this.withParams = function(params) {
		return JSON.stringify(params);
	}
	
	this.activeDocId = function() {
		return Indesign().docId;
	}
	
	return this;
}

////////// MAIN //////////
Logger('DEBUG').debug('Running Utility controller with action __action__');

// __var__ values are replaced by JSX.js
BaseController(Utility()).run('__action__',__params__);
