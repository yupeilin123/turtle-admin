const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const eslintFormatter = require('eslint-friendly-formatter');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
    path: path.resolve('dist'),
    publicPath: '/'
  },
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.ts', '.tsx','.js','.json'],
    alias: {
      '@': path.resolve('src'),
    },
  },
  module: {
    noParse: [
      /moment/,
    ],
    // elsint
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
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
      // react js
      {
        test: /\.(js|ts|tsx)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        include: path.resolve('src'),
      },
      // css
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
              modifyVars: {
                'card-actions-background': '#f5f8fa',
                'menu-dark-bg': '#343f51',
                'menu-dark-submenu-bg': '#2e3848',
                'menu-item-color': 'rgba(255, 255, 255, 0.65)',
              },
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
      // image
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[ext]',
        },
      },
      // font-family
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
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