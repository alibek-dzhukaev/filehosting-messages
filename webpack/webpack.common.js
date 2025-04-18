const path = require('path');

const aliases = require('./config/common/aliases');
const commonModules = require('./config/common/modules');
const commonPlugins = require('./config/common/plugins');
const moduleFederation = require('./config/moduleFederation');
const { PROJECT_ROOT, BUILD_DIR } = require('./constants');

const commonConfig = {
  entry: path.join(PROJECT_ROOT, 'src/main.tsx'),
  output: {
    path: BUILD_DIR,
    filename: 'js/[name].[contenthash].js',
    chunkFilename: 'js/[name].[contenthash].chunk.js',
    clean: true,
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: aliases,
  },
  module: commonModules,
  plugins: [...commonPlugins, moduleFederation()],
};

module.exports = commonConfig;
