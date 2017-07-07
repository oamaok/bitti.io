const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
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
    filename: '[hash].js',
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
      inlineSource: '.(js|css)$',
    }),

    new HtmlWebpackInlineSourcePlugin(),

    new webpack.DefinePlugin({
      PRODUCTION: true,
    }),

    new ExtractTextPlugin('[contenthash].css'),
  ],

  devtool: '',

  module: {
    loaders: [
      {
        test: /\.elm$/,
        loader: 'elm-webpack-loader?verbose=false&warn=false&debug=false&cache=false&cwd=.',
      },
      {
        test: /\.s[ac]ss$/,
        loader: ExtractTextPlugin.extract('css-loader!postcss-loader!sass-loader'),
      },
      {
        test: /\.(png|jpe?g|gif|ttf|eot|woff2?|)$/,
        loader: 'url-loader',
      },
    ],
  },
};
