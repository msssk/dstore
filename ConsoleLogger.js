define([
	'dojo/_base/lang'
], function (lang) {
	return {
		error: lang.hitch(console, console.error),
		log: lang.hitch(console, console.log),
		warn: lang.hitch(console, console.warn)
	};
});
