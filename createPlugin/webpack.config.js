const webpack = require('webpack');
const path = require('path');
const MyPlugin = require('./plugins/MyPlugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins:[
			new MyPlugin()
	]
};