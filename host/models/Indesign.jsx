
/**
 * InDesign wrapper. Application is available in the global `app` variable.
 * @constructor
 */
function Indesign(){
	// retain the document ID so if it's not active, we can still interact with it
	this.docId = app.activeDocument.id;
	
	this.doc = function() {
		if(this.docId) {
			return app.documents.itemByID(this.docId);
		}
		return app.activeDocument;
	}
	
	this.wordCount = function() {
		var count = 0;
		for ( var i=0; this.doc().stories.length > i; i++) {
			count += this.doc().stories[i].words.length;
		}
		return count;
	}
	
	this.charCount = function() {
		var count = 0;
		for ( var i=0; this.doc().stories.length > i; i++) {
			count += this.doc().stories[i].characters.length;
		}
		return count;
	}
		
	return this;
}
