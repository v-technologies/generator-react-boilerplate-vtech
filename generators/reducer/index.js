'use strict';

var SimpleFileGenerator = require('../../util/SimpleFileGenerator');



module.exports = SimpleFileGenerator.extend({
	_fileCategory: 'reducer',
	_destinationDefaultFolder: 'js/reducers',

	prompting: function() {
		SimpleFileGenerator.prototype.prompting.apply(this, arguments);
	},

	writing: function() {
		SimpleFileGenerator.prototype.writing.apply(this, arguments);
	}
});
