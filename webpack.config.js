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
	module : {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
		]
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		//new webpack.optimize.UglifyJsPlugin({minimize: true})
	]
}
