'use strict';

var SimpleFileGenerator = require('../../util/SimpleFileGenerator');



module.exports = SimpleFileGenerator.extend({
	_fileCategory: 'saga',
	_destinationDefaultFolder: 'js/sagas',

	prompting: function() {
		SimpleFileGenerator.prototype.prompting.apply(this, arguments);
	},

	writing: function() {
		SimpleFileGenerator.prototype.writing.apply(this, arguments);
	}
});
