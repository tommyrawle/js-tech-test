const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        include: [path.resolve(__dirname, 'src/')],
        use: ['eslint-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: 'url-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'main.dev.js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    open: true,
    disableHostCheck: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Sky Tech Test - dev',
      template: 'index-template.html'
    })
  ]
};
