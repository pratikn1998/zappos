const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['./client/src/index'],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.css/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true } }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader'
        }
    }
    ]
  },
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.css'],
    modules: ['node_modules']
  },
  output: {
    path: path.join(__dirname, '/client/public/build'),
    publicPath: '/client/public/build/',
    filename: 'bundle.js'
  },
  mode: 'development'
};
