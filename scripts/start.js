'use strict';

process.on('unhandledRejection', err => {
  throw err;
});

const merge = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const devConfig = require('../config/webpack.config.dev');

const host = '127.0.0.1';
const port = 8801;

/**
 * combination devConfig and devServer 
 * product serverConfig
 */
const serverConfig = merge(devConfig, {
  devServer: {
    clientLogLevel: 'none',
    compress: true,
    historyApiFallback: true,
    host: host,
    hot: true,
    inline: true,
    open: true,
    overlay: false,
    port: port,
    proxy: {},
    progress: true,
    publicPath: '/',
    quiet: true,
    watchOptions: {
      poll: false,
    },
  },
});

serverConfig.plugins.push(
  /**
   * Friendly-errors-webpack-plugin recognizes certain classes of webpack errors and cleans 
   * aggregates and prioritizes them to provide a better Developer Experience.
   */
  new FriendlyErrorsPlugin({
    compilationSuccessInfo: {
      messages: [
        `Your application is running here: http://${host}:${port}`,
      ],
    },
  }),
);

module.exports = serverConfig;