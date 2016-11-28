var path = require('path');
var webpack = require('webpack');

module.exports = {
  compress: true,
  entry: [
    './src/index'
  ],
  eslint: {
    configFile: '.eslintrc.json'
  },
  output: {
    path: path.join(__dirname, 'docs', 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      { enforce: 'pre',
        test: /\.jsx?$/,
        loaders: ['eslint-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
