const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		client: './app/script/client.js',
		server: './app/script/server.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'app/index.html',
			excludeChunks: ['server']
		}),
        // new webpack.optimize.UglifyJsPlugin({
        //      compress: {warnings: true}
        //    }),
	],
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'public')
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		],
	}
};