/**
 * Utility methods to present dialog boxes to the user.
 */

function Dialog() {}; 

/**
 * @returns undefined
 */
Dialog.alert = function(message) {
	alert(message);
}

/**
 * @returns boolean True if Yes button, False if No button is selected
 */
Dialog.confirm = function(message) {
	return confirm(message);
}

/**
 * @returns string
 */
Dialog.prompt = function(message, value) {
	if(value == undefined || value == null) {
		value = '';
	}
	return prompt(message,value);
}
