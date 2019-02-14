'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const InlineSourcePlugin = require('html-webpack-inline-source-plugin');
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, '../'),
  entry: {
    main: './src/index.tsx',
  },
  output: {
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'false',
  resolve: {
    extensions: ['.ts', '.tsx','.js','.json'],
    alias: {
      '@': path.resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        include: path.resolve('src'),
        options: {
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory({
              libraryName: 'antd',
              libraryDirectory: 'lib',
              style: true
            })]
          }),
        }
      },
      // react js
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
      // html
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      // css
      {
        test: /\.(css|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
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
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
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
      // svg
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          limit: 10000,
          noquotes: true,
        },
      },
      // image
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:8].[ext]',
        },
      },
      // font
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    // 提取css分离到其他文件
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
    }),
    // html
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      favicon: './public/favicon.ico',
      inject: true,
      inlineSource: 'runtime~.+\\.js',
    }),
    // 压缩优化css
    new OptimizeCSSAssetsPlugin(),
    // 生成mainifets
    new ManifestPlugin(),
    // 搭配HtmlWebpackPlugin的inlineSource来使用，用来内联资源
    new InlineSourcePlugin(),
  ],
  // 优化代码
  optimization: {
    // 开启压缩，使用UglifyjsPlugin
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            // 移除注释
            comments: false,
          },
        },
        // 启用文件缓存
        cache: true,
        // 开启多进程提高构建速度
        parallel: true,
      }),
    ],
    // 提取公共代码
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // 基础类库
        libs: {
          name: 'chunk-libs',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial',
        },
        // UI库
        antdUI: {
          name: 'chunk-antd',
          priority: 20,
          test: /[\\/]node_modules[\\/]antd[\\/]/,
        },
        // 自定义组件
        commons: {
          name: 'chunk-comomns',
          test: /src\/components/,
          minChunks: 3,
          priority: 2,
          reuseExistingChunk: true,
        },
      },
    },
    runtimeChunk: true,
    concatenateModules: true,
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  performance: {
    hints: false,
  },
};