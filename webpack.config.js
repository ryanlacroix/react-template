var config = {
   entry: './client/index.js',
	
   output: {
      path:'/absolute/path/to/react-template',
      filename: 'bundle.js'
   },
	
   devServer: {
      contentBase: './client',
      port: 2112,
      hot: true
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
         },
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
         }
      ]
   }
}

module.exports = config;