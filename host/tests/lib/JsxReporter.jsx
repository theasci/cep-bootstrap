//@include '../models/Logger.jsx'

$.global.jasmineRequire.console = function(jRequire, j$) {
	j$.JsxReporter = jRequire.JsxReporter();
};

$.global.jasmineRequire.JsxReporter = function() {

	var noopTimer = {
		start: function() {},
		elapsed: function() {
			return 0;
		}
	};

	function JsxReporter(options) {

		var showColors = options.showColors || false,
			onComplete = options.onComplete || function() {},
			timer = options.timer || noopTimer,
			specCount,
			failureCount,
			failedSpecs = [],
			pendingCount,
			failedSuites = [],
			logger = Logger('DEBUG', 'test.log');

		print('***************************');
		print('Jasmine ExtendScript Runner');
		print('***************************');

		this.jasmineStarted = function() {
			specCount = 0;
			failureCount = 0;
			pendingCount = 0;
			timer.start();
		};

		this.jasmineDone = function() {

			// printNewline();
			for (var i = 0; i < failedSpecs.length; i++) {
				specFailureDetails(failedSpecs[i]);
			}

			if (specCount > 0) {

				var specCounts = specCount + ' ' + plural('spec', specCount) + ', ' +
					failureCount + ' ' + plural('failure', failureCount);

				if (pendingCount) {
					specCounts += ', ' + pendingCount + ' pending ' + plural('spec', pendingCount);
				}

				print(specCounts);
			} else {
				print('No specs found');
			}

			var seconds = timer.elapsed() / 1000;
			print('Finished in ' + seconds + ' ' + plural('second', seconds));

			for (i = 0; i < failedSuites.length; i++) {
				suiteFailureDetails(failedSuites[i]);
			}

			onComplete(failureCount === 0);
		};

		this.specDone = function(result) {
			specCount++;

			if (result.status == 'pending') {
				pendingCount++;
				$.write('*');
				return;
			}

			if (result.status == 'passed') {
				$.write('.');
				return;
			}

			if (result.status == 'failed') {
				failureCount++;
				failedSpecs.push(result);
				$.write('F');
			}
		};

		this.suiteDone = function(result) {
			if (result.failedExpectations && result.failedExpectations.length > 0) {
				failureCount++;
				failedSuites.push(result);
			}
		};

		return this;

		function print(msg) {
			logger.debug(msg);
			// $.writeln(msg);
		}

		function printNewline() {
			print('\n');
		}

		function plural(str, count) {
			return count == 1 ? str : str + 's';
		}

		function repeat(thing, times) {
			var arr = [];
			for (var i = 0; i < times; i++) {
				arr.push(thing);
			}
			return arr;
		}

		function indent(str, spaces) {
			var lines = (str || '').split('\n');
			var newArr = [];
			for (var i = 0; i < lines.length; i++) {
				newArr.push(repeat(' ', spaces).join('') + lines[i]);
			}
			return newArr.join('\n');
		}

		function specFailureDetails(result) {
			print(result.fullName);

			for (var i = 0; i < result.failedExpectations.length; i++) {
				var failedExpectation = result.failedExpectations[i];
				print(indent(failedExpectation.message, 2));
				print(indent(failedExpectation.stack, 2));
			}

		}

		function suiteFailureDetails(result) {
			for (var i = 0; i < result.failedExpectations.length; i++) {
				print('An error was thrown in an afterAll');
				print('AfterAll ' + result.failedExpectations[i].message);

			}
		}
	}

	return JsxReporter;
};
