const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: {
		'ng2-http-plus.umd': './src/index.ts',
		'ng2-http-plus.umd.min': './src/index.ts'
	},
	output: {
		path: path.resolve(__dirname, 'lib-umd'),
		filename: '[name].js',
		libraryTarget: 'umd',
		library: 'ng2HttpPlus',
		umdNamedDefine: true
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	resolveLoader: { fallback: path.join(__dirname, "node_modules") },
	devtool: 'source-map',
	plugins: [
		new UglifyJsPlugin({
			minimize: true,
			sourceMap: true,
			include: /\.min\.js$/,
		})
	],
	module: {
		loaders: [{
			test: /\.tsx?$/,
			loader: 'awesome-typescript-loader',
			exclude: /node_modules/,
			query: {
				declaration: false,
			}
		}]
	}
};