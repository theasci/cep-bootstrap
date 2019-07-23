'use strict';
const path = require('path');

////////// CSInterface.js //////////
const csi = new CSInterface();

function csiOpenDoc(basename) {
	var file = path.join(__dirname, 'images', basename);
	csi.evalScript(`openDocument('${file}')`)
}

function csiEvalPrompt(title, prompt) {
	csi.evalScript(
		`Dialog.prompt('${title}','${prompt}')`,
		messageCallback
	);
}

function csiController(controller,action) {
	csi.evalScript(
		`./host/controllers/${controller}.jsx`,
		{action: action},
		messageCallback
	);
}

////////// JSX.js //////////
function jsxOpenDoc(basename) {
	var file = path.join(__dirname, 'images', basename);
	jsx.eval(`openDocument('${file}')`);
}

/**
 * Loads host/index.jsx and runs it there.
 * @param  string title
 * @param  string prompt
 */
function jsxEvalPrompt(title, prompt) {
	jsx.eval(
		`Dialog.prompt('__title__','__prompt__')`,
		{title: title, prompt: prompt},
		messageCallback
	);
}

function jsxFilePrompt(title, prompt) {
	jsx.file(
		'views/prompt.jsx',
		{title: title, prompt: prompt},
		messageCallback
	);
}

/**
 * Run a ExtendScript controller file with the given action and params.
 * @param  string controller name
 * @param  string action name
 * @param  object params hash of key:value pairs to send to the controller file
 * @param  function callback handle the results, defaults to 
 */
function jsxController(controller,action,params=null,callback=messageCallback) {
	jsx.file(
		`./host/controllers/${controller}.jsx`,
		{action: action, params: params ? JSON.stringify(params) : null},
		callback
	);
}

////////// Misc //////////

/**
 * This updates the #message div with the returned string.
 * @param  string result The string results from executed ExtendScript
 */
function messageCallback(result) {
	var message = null;
	if(result == undefined && result == null) {
		message = 'No response was received!';
	} else {
		message = result;
	}
	$('#message').text(message);
}

function openSite(site) {
	var open = require('open');
	open(site);
}

function panelDetails() {
	return {
		node: {
			version: process.version,
			dependencies: process.versions
		}, 
		host: {
			version: csi.getHostEnvironment().appVersion,
			appId: csi.getHostEnvironment().appId
		}
	};
}
