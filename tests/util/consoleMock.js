define([
	'dojo/_base/lang'
], function (lang) {
	var consoleMethods = {
		error: console.error,
		log: console.log,
		warn: console.warn
	};

	var consoleMock = {
		errors: [],
		logs: [],
		warns: [],

		restore: function () {
			lang.mixin(console, consoleMethods);
		}
	};

	console.error = function (message) {
		consoleMethods.error.apply(console, arguments);
		consoleMock.errors.push(message);
	};

	console.log = function (message) {
		consoleMethods.log.apply(console, arguments);
		consoleMock.logs.push(message);
	};

	console.warn = function (message) {
		consoleMethods.warn.apply(console, arguments);
		consoleMock.warns.push(message);
	};

	return consoleMock;
});
