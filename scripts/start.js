'use strict';

process.on('unhandledRejection', err => {
  throw err;
});

const merge = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const config = require('../config/webpack.config.dev');
const serverConfig = require('../config/webpack.devServer');

const devWebpackConfig = merge(config, serverConfig);
const { host, port } = serverConfig.devServer;

process.env.PORT = port;

devWebpackConfig.plugins.push(
  new FriendlyErrorsPlugin({
    compilationSuccessInfo: {
      messages: [
        `Your application is running here: http://${host}:${port}`,
      ],
    },
  }),
);

module.exports = devWebpackConfig;