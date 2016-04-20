const path = require('path');
const fullPath = path.resolve.bind(null, __dirname);



/**
 *
 */
module.exports = function(config) {
	config.set({
		files: [
			'<%= props.testsPath %>/**/*.js'
		],
		frameworks: [
			'mocha',
			'chai'
		],
		reporters: [
			'mocha'
		],
		browsers: [
			'Chrome',
			'Firefox'
		],
		preprocessors: {
			'<%= props.jsPath %>/**/*.js': ['webpack'],
			'<%= props.testsPath %>/**/*.js': ['webpack']
		},
		webpack: {
			devtool: 'inline-source-map',
			resolve: {
				alias: {
					'<%= props.projectName %>': fullPath('<%= props.jsPath %>')
				}
			},
			module: {
				loaders: [
					{
						test: /\.js$/,
						include: [
							fullPath('<%= props.jsPath %>'),
							fullPath('<%= props.testsPath %>')
						],
						loader: 'babel'
					},
					{
						// @see lelandrichardson/enzyme-example-karma-webpack
						test: /\.json$/,
						loader: 'json'
					}
				]
			},
			externals: {
				// @see lelandrichardson/enzyme-example-karma-webpack
				'react/lib/ExecutionEnvironment': true,
				'react/lib/ReactContext': true
			}
		},
		webpackMiddleware: {
			noInfo: true
		}
	});
};
