const path = require('path');
const webpack = require('webpack');

module.exports = (env = {}) => {
  const isProduction = env.production === true;

  return {
    mode: isProduction ? 'production' : 'development',
    entry: ['./src/server.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'server.js',
    },
    plugins: [
      new webpack.EnvironmentPlugin(['NODE_ENV']),
    ],
    devtool: 'source-map',
    target: 'node',
    resolve: {
      modules: [__dirname, 'node_modules'],
      extensions: ['*', '.js', '.jsx'],
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
  };
};
