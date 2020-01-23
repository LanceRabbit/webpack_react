const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, "./src"),
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
  },
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
      },
    ],
  },
};