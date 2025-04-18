const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = [
  new ReactRefreshWebpackPlugin({
    overlay: false,
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: false,
  }),
];
