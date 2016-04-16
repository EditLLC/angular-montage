var webpack = require('webpack');

module.exports = {
	context: __dirname,
	entry: './src/index.js',
	output: {
		libraryTarget: 'umd',
		library: 'ngMontage',
		filename: './dist/angular-montage.js'
	},
	resolve: {
		extensions: ['', '.js']
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		//new webpack.optimize.UglifyJsPlugin({minimize: true})
	]
}
