'use strict';

process.on('unhandledRejection', err => {
  throw err;
});

const ora = require('ora');
const chalk = require('chalk');
const webapck = require('webpack');
const prodConfig = require('../config/webpack.config.prod');

const spinner = ora(
  `building for ${process.env.NODE_ENV} environment...`,
);
spinner.start();

// 判断是否需要分析打包后文件
if (process.env.ANALYZE) {
  const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
  prodConfig.plugins.push(
    new BundleAnalyzerPlugin(),
  );
}
webapck(prodConfig, (err, stats) => {
  spinner.stop();
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toJson();
  // if build failed , tips error or warn 
  if (stats.hasErrors()) {
    console.log(chalk.red('Build failed with errors.\n'));
    process.exit(1);
  }
  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }

  process.stdout.write(
    `${stats.toString({
      colors: true,
      modules: false,
      children: false,
      version: false,
      entrypoints: false
    })}\n\n`,
  );

  console.log(chalk.cyan('Build complete.\n'));
});