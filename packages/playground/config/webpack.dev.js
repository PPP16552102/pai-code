export default {
  mode: 'development',
  devServer: {
    static: '../dist',
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true
  }
};