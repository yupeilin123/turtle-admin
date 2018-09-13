module.exports = {
  devServer: {
    clientLogLevel: 'none',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: 'localhost',
    port: 8001,
    open: true,
    overlay: false,
    publicPath: '/',
    proxy: {},
    quiet: true,
    inline: true,
    watchOptions: {
      poll: false,
    },
    progress: true,
  },
};