const path = require('path');

// define entry point - path to our main driver file
// define output of final bundle file - path to where the public version of the file will live.

//__dirname is property gives you the absolute path to the current module (file)
//use node path to build the path to where we want to put the output file

// module.exports a way to expose an object to another file via node
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.s?css$/,
    }]
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};