var config = {
   entry: './client/index.js',
	
   output: {
      path:'/home/ryan/Documents/Projects/react-template',    
      filename: 'bundle.js'
   },
	
   devServer: {
      contentBase: './client',
      port: 2406,
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