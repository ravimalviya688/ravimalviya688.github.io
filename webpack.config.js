const path = require('path');
const HWP = require('html-webpack-plugin');
module.exports = {
	mode: 'development',
	entry: __dirname + '/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	output: {
	    path: __dirname + '/build/',
	    filename: 'bundle.js',
   		publicPath: '/',
	},
	plugins:[
      new HWP(
           {template: __dirname+'/index.html'}
       )
   ],
   devServer: {
      historyApiFallback: true,
    },
}