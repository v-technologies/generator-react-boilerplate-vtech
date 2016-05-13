'use strict';

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fullPath = path.resolve.bind(null, __dirname);



/**
 *
 */
module.exports = {
	entry: [
		'babel-polyfill',
		'whatwg-fetch',
		'./<%= props.jsPath %>/index',
		'./<%= props.cssPath %>/index.scss'
	],
	output: {
		path: fullPath('<%= props.distPath %>'),
		publicPath: '<%= props.distPath %>',
		filename: '<%= props.distJsName %>',
	},
	devtool: 'source-map',
	devServer: {
		historyApiFallback: true
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: fullPath('<%= props.jsPath %>'),
				loader: 'babel'
			},
			{
				test: /\.scss$/,
				include: fullPath('<%= props.cssPath %>'),
				loader: ExtractTextPlugin.extract('style', [
					'css?-url&sourceMap',
					'postcss',
					'sass?sourceMap'
				])
			}
		]
	},
	postcss: function(webpack) {
		return [
			autoprefixer({
				browsers: [
					'ie >= 8',
					'ie_mob >= 10',
					'ff >= 20',
					'chrome >= 34',
					'safari >= 7',
					'opera >= 23',
					'ios >= 7',
					'android >= 4.4',
					'bb >= 10'
				]
			})
		];
	},
	plugins: [
		new ExtractTextPlugin('<%= props.distCssName %>', {
			allChunks: true
		})
	]
};
