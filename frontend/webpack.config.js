const path = require("path")

module.exports = {
    module: {
      /*entry: 'index.js',
      output: {
        path: path.resolve(__dirname + '/'),
        filename: 'bundle.js',
        publicPath: '/'
      }, */
      /*entry: {
        frontend: './src/index.js',
      },
      output: {
        path: path.resolve(__dirname, '/static/frontend'),
        filename: './main.js',
        
      },*/
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  }