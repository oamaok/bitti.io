const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: [
      './client/sass/main.sass',
      './client/js/index.js',
    ],
  },

  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: '[name].js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.elm', '.sass', '.scss'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      inject: 'body',
      filename: 'index.html',
    }),

    new webpack.NamedModulesPlugin(),
  ],

  devtool: 'eval-source-map',

  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'build/'),
    publicPath: '/',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
      },
    },
  },

  module: {
    loaders: [
      {
        test: /\.elm$/,
        loaders: [
          'elm-hot-loader',
          'elm-webpack-loader?verbose=true&warn=true&debug=true&cache=false&cwd=.',
        ],
      },
      {
        test: /\.s[ac]ss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|ttf|eot|woff2?|)$/,
        loader: 'url-loader',
      },
    ],
  },
};
