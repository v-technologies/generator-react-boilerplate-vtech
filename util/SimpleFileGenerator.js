'use strict';

var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var yeoman = require('yeoman-generator');
var pathUtil = require('./path');



/**
 *
 */
module.exports = yeoman.Base.extend({
	_fileCategory: null,
	_destinationDefaultFolder: null,
	_templateFile: 'file.js',

	constructor: function() {
		yeoman.Base.apply(this, arguments);

		if (this._destinationDefaultFolder === null) {
			this._destinationDefaultFolder = 'js/' + this._fileCategory;
		}

		this.argument('name', {
			desc: 'Name of the ' + this._fileCategory + ' file',
			required: false,
			optional: true,
			type: String
		});

		if (this.name) {
			this.props = _.assign({}, this.props || {}, {
				name: this.name
			});
		}
	},

	prompting: function() {
		this.log('This generator creates a base ' + this._fileCategory + ' file for you.');
		this.log('\n');

		var that = this;
		var done = this.async();

		var relativeDestination = pathUtil.relativeToCwd(this.destinationPath());
		var prompts = [];
		if (!this.name) {
			prompts.push({
				type: 'input',
				name: 'name',
				message: 'Name of the ' + this._fileCategory + ' file?',
				filter: function(userInput) {
					if (_.endsWith('.js')) {
						return userInput.substr(0, userInput.length - 3);
					}
					return userInput;
				}
			});
		}
		prompts.push({
			type: 'input',
			name: 'directory',
			message: 'Folder of the ' + this._fileCategory + ' file (relative to ' + relativeDestination + ')?',
			default: this._destinationDefaultFolder,
			validate: function(userInput) {
				if (fs.statSync(that.destinationPath(userInput)).isDirectory()) {
					return true;
				}
				return 'The given folder path `' + userInput +' doesn\'t seem to exist';
			}
		});

		this.prompt(prompts, function(props) {
			this.props = _.assign({}, this.props, props);
			done();
		}.bind(this));
	},

	writing: function() {

		if (!this._destinationFile) {
			this._destinationFile = path.join(this.props.directory, this.props.name + '.js');
		}

		this.fs.copyTpl(
			this.templatePath(this._templateFile),
			this.destinationPath(this._destinationFile),
			this.props
		);
	}
});
