'use strict';

const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const config = require('./webpack.config');
const fullPath = path.resolve.bind(null, __dirname);



/**
 *
 */
config.module.preLoaders = [{
	test: /\.js$/,
	include: fullPath('<%= props.jsPath %>'),
	loader: 'eslint',
}];

/**
 *
 */
config.plugins.push(
	new StyleLintPlugin({
		failOnError: false
	}),
	new BrowserSyncPlugin({
		host: 'localhost',
		port: 3000,
		proxy: '<%= props.browserSyncProxy %>'
	})
);



module.exports = config;
