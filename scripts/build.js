'use strict';

process.on('unhandledRejection', err => {
  throw err;
});

const ora = require('ora');
const chalk = require('chalk');
const path = require('path');
const webapck = require('webpack');
const fs = require('fs-extra');
const config = require('../config/webpack.config.prod');

const spinner = ora(
  `building for ${process.env.NODE_ENV} environment...`,
);
spinner.start();

fs.emptyDir(path.resolve(__dirname, '../dist')).then(() => {
  if (process.env.ANALYZE) {
    const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
    config.plugins.push(
      new BundleAnalyzerPlugin(),
    );
  }
  webapck(config, (err, stats) => {
    spinner.stop();
    if (err) throw err;
    process.stdout.write(
      `${stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      })}\n\n`,
    );

    if (stats.hasErrors()) {
      console.log(chalk.red('Build failed with errors.\n'));
      process.exit(1);
    }

    console.log(chalk.cyan('Build complete.\n'));
  });
}).catch(err => {
  console.error(err);
  process.exit(1);
});