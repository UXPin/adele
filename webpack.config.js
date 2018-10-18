const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env = {}) => {
  const isProduction = env.production === true;
  const isLocal = env.local === true;
  return {
    entry: ['./src/index.js'],
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: (() => {
        if (isProduction) return '/build/';
        else if (isLocal) return './';
        return '/';
      })(),
    },
    resolve: {
      modules: [__dirname, 'node_modules'],
      extensions: ['*', '.js', '.jsx'],
    },
    devServer: {
      historyApiFallback: true,
      compress: true,
    },
    module: {
      rules: [
        {
          use: ['babel-loader', 'eslint-loader'],
          test: /\.jsx?$/,
          exclude: /node_modules/,
        },
        {
          use: ['file-loader'],
          test: /\.(jpe?g|png|gif)$/i,
        },
        {
          use: ['raw-loader'],
          test: /\.svg$/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        favicon: './src/assets/favicon.ico',
      }),
      new CopyWebpackPlugin([
        { from: './robots.txt', to: './' },
        { from: './src/assets/twitter_image.jpg', to: './' },
      ]),
    ],
  };
};
