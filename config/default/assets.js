'use strict';

const config = {
	assets: {
		'app.css': [
			'+assets/css/000_variables.scss',
			'assets/css/basic.scss',
			'patterns/**/css/*.scss',
			'patterns/**/css/modifier/*.scss',
		],
		'app.js': [
			'node_modules/babel-polyfill/dist/polyfill.min.js',
			'node_modules/jquery/dist/jquery.min.js',
			'node_modules/terrific/dist/terrific.min.js',
			'assets/js/*.js',
			'patterns/**/js/*.js',
			'patterns/**/js/decorator/*.js',
		],
	},
};

module.exports = config.assets;
