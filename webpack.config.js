var debug = process.env.NODE_ENV !== 'production'
var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
console.log('is build mode ==' + !debug)
module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: debug ? 'inline-sourcemap' : 'source-map',
  entry: './app.js',
  node: {
    fs: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['react-html-attrs']
        }
      },
      {
        test: /\.scss$/,
        loaders: false ? ['style-loader', 'css-loader', 'sass-loader'] : ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})
      },
      {
        test: /\.(png|jpg|ico)$/,
        loader: 'file-loader'
      }
    ]
  },
  output: {
    path: [__dirname, '/dst/'].join('/'),
    filename: 'app.min.js'
  },
  plugins: debug ? [new ExtractTextPlugin('allStyles.css')] : [
    new ExtractTextPlugin('allStyles.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.min.js'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      /* sourcemap: true, */
      beautify: false,
      mangle: {
        screw_ie8: false,
        keep_fnames: true
      },
      compress: {
        screw_ie8: false,
        warnings: false
      },
      comments: false
    })

  ]
}
