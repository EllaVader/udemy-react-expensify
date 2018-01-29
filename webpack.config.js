const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// define entry point - path to our main driver file
// define output of final bundle file - path to where the public version of the file will live.

//__dirname is property gives you the absolute path to the current module (file)
//use node path to build the path to where we want to put the output file

// module.exports a way to expose an object to another file via node

module.exports = (env) => {
  const isProduction = env === 'production';
  // create new instance of this class, argument is the name of the file our 
  // css will get extracted into
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
         use: [
           {
             loader: 'css-loader',
             options: {
               sourceMap: true
             }
           },
           {
             loader: 'sass-loader',
             options: {
               sourceMap: true
             }
           }
         ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map': 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
}
