'use strict';

var SimpleFileGenerator = require('../../util/SimpleFileGenerator');
var _ = require('lodash');
var path = require('path');



module.exports = SimpleFileGenerator.extend({
	_fileCategory: 'container',
	_destinationDefaultFolder: 'js/components',

	prompting: function() {
		SimpleFileGenerator.prototype.prompting.apply(this, arguments);
	},

	writing: function() {
		this.props.component = _.upperFirst(this.props.name);
		this._destinationFile = path.join(this.props.directory, this.props.component + 'Container.js');

		SimpleFileGenerator.prototype.writing.apply(this, arguments);
	}
});
