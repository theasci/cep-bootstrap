//@include '../node_modules/moment/moment.js'
//@include '../lib/polyfill/Array.js'

/**
 * Handles logging messages to different sources. Creates logs in hosts/logs/ directory.
 * @see https://github.com/sidpalas/extendscript-logging
 *
 * var logger = Logger('DEBUG','mylog.log');
 */
function Logger(severity, logName){

	this.levels = [
		'DEBUG',
		'INFO',
		'NOTICE',
		'WARN',
		'ERROR',
		'CRITICAL'
	];
	this.severity = severity ? severity : 'INFO';
	this.logName = logName ? logName : 'host.log';

	this.debug = function(message) {
		return this.log(message, 'DEBUG');
	}
	this.info = function(message) {
		return this.log(message, 'INFO');
	}
	this.notice = function(message) {
		return this.log(message, 'NOTICE');
	}
	this.warn = function(message) {
		return this.log(message, 'WARN');
	}
	this.error = function(message) {
		return this.log(message, 'ERROR');
	}
	this.critical = function(message) {
		return this.log(message, 'CRITICAL');
	}

	this.messageString = function(message){
		var msg = moment().format('YYYY-MM-DDTHH:mm:SS');
		msg += "|"+this.severity;
		msg += "|"+message;
		return msg;
	}

	this.file = function() {
		var logsDirString = File($.fileName).path + "/../logs/"
		var logsDir = new Folder(logsDirString);
		if (!logsDir.exists){
			logsDir.create();
		}
		var logFilePath = logsDirString + this.logName;
		return File(logFilePath);
	}
	
	/**
	 * Determine if we should show a message at the given severity.
	 * @param  string severity, one of this.levels
	 * @return boolean
	 */
	this.meetsSeverity = function(severity) {
		return this.levels.indexOf(severity) >= this.levels.indexOf(this.severity);
	}
	
	this.log = function(message, severity) {
		if(this.levels.indexOf(severity) == -1) {
			throw new TypeError('Severity '+severity+' is not one of Logger.levels');
		}
		
		if(!this.meetsSeverity(severity)) {
			return false;
		}
		
		var file = this.file();
		file.open('a+');
		file.encoding = 'UTF-8';
		file.lineFeed = 'Unix';
		file.writeln(this.messageString(message));
		file.close(); 
		return true;
	}
	
	return this;
}
