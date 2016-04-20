'use strict';

const path = require('path');
const webpack = require('webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fullPath = path.resolve.bind(null, __dirname);



/**
 *
 */
module.exports = {
	entry: [
		'./<%= props.jsPath %>/index',
		'./<%= props.cssPath %>/index.scss'
	],
	output: {
		path: fullPath('<%= props.distPath %>'),
		publicPath: '<%= props.distPath %>',
		filename: '<%= props.distJsName %>',
	},
	devtool: 'source-map',
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				include: fullPath('<%= props.jsPath %>'),
				loader: 'eslint',
			}
		],
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
					'css-loader?-url&sourceMap',
					'sass?sourceMap'
				])
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
		}),
		new StyleLintPlugin(),
		new ExtractTextPlugin('<%= props.distCssName %>', {
			allChunks: true
		})
	]
};
