const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = [
  new MiniCssExtractPlugin({
    filename: 'styles.[contenthash].css',
    chunkFilename: 'styles.[contenthash].css',
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: '../reports/bundle-report.html',
    openAnalyzer: false,
    generateStatsFile: true,
    statsFilename: '../reports/bundle-stats.json',
  }),
];
