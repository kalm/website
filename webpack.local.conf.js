const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: '/public',
		filename: 'bundle.js',
		publicPath: 'http://localhost:8080/'
	},
	//devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?url=false', 'sass-loader']
    	},
			{
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file-loader?hash=sha512&digest=hex&name=public/images/[name].[ext]',
            'image-webpack-loader?bypassOnDebug'
        ]
    	}
		]
	},
	devServer: {
		contentBase: './public',
		port: 8080,
		noInfo: false,
		hot: true,
		inline: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
