'use strict';

var fs = require('fs');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var ejs = require('ejs');



/**
 *
 */
module.exports = yeoman.Base.extend({

	/**
	 *
	 */
	prompting: function () {
		this.log(yosay('Welcome to the React boilerplate generator!'));

		var done = this.async();
		var prompts = [
			{
				type: 'input',
				name: 'projectName',
				message: 'What is the name of your project?'
			},
			{
				type: 'input',
				name: 'projectDescription',
				message: 'What is the description of your project?'
			},
			{
				type: 'input',
				name: 'projectVersion',
				message: 'What is the version of your project?',
				default: '0.1.0'
			},
			{
				type: 'input',
				name: 'jsPath',
				message: 'In which folder do you want to put JS files? (relative to the root)',
				default: 'js'
			},
			{
				type: 'input',
				name: 'testsPath',
				message: 'In which folder do you want to put test files? (relative to the root)',
				default: 'test'
			},
			{
				type: 'input',
				name: 'cssPath',
				message: 'In which folder do you want to put CSS files? (relative to the root)',
				default: 'css'
			},
			{
				type: 'input',
				name: 'distPath',
				message: 'In which folder do you want to put built files? (relative to the root)',
				default: 'dist'
			},
			{
				type: 'input',
				name: 'distJsName',
				message: 'What will be the name of the built JS file?',
				default: 'app.js'
			},
			{
				type: 'input',
				name: 'distCssName',
				message: 'What will be the name of the built CSS file?',
				default: 'app.css'
			}
		];

		this.prompt(prompts, function(props) {
			this.props = props;
			done();
		}.bind(this));
	},

	/**
	 *
	 */
	writing: function () {
		var self = this;

		function isFile(name) {
			var path = self.templatePath(name);
			return fs.statSync(path).isFile();
		}

		function copyTemplate(name) {
			self.fs.copyTpl(
				self.templatePath(name),
				self.destinationPath(name),
				self
			);
		}

		var files = fs
			.readdirSync(this.sourceRoot())
			.filter(isFile)
			.forEach(copyTemplate);

		this.directory('js', this.props.jsPath);
		this.directory('test', this.props.testsPath);
		this.directory('css', this.props.cssPath);
	},

	/**
	 *
	 */
	install: function () {
		this.installDependencies();
	}
});
