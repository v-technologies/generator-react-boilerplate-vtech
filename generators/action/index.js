'use strict';

var SimpleFileGenerator = require('../../util/SimpleFileGenerator');



module.exports = SimpleFileGenerator.extend({
	_fileCategory: 'action',
	_destinationDefaultFolder: 'js/actions',

	prompting: function() {
		SimpleFileGenerator.prototype.prompting.apply(this, arguments);
	},

	writing: function() {
		SimpleFileGenerator.prototype.writing.apply(this, arguments);
	}
});
