const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const eslintFormatter = require('eslint-friendly-formatter');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, '../'),
  entry: path.resolve('src/index.js'),
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
    path: path.resolve('dist'),
  },
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      '@': path.resolve('src'),
    },
  },
  module: {
    noParse: [
      /moment/,
    ],
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter,
            },
            loader: 'eslint-loader',
          },
        ],
        include: path.resolve('src'),
      },
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        include: path.resolve('src'),
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              modifyVars: require('../src/common/theme'),
              javascriptEnabled: true,
            },
          },
        ],
        include: /node_modules/,
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true,
            },
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    // 热更新模块替换
    new webpack.HotModuleReplacementPlugin(),
    // html插件
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      favicon: './public/favicon.ico',
      inject: true,
    }),
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};