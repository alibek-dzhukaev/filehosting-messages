const path = require('path');

const PROJECT_ROOT = path.resolve(__dirname, '../');
const SRC_DIR = path.join(PROJECT_ROOT, 'src');
const BUILD_DIR = path.join(PROJECT_ROOT, 'dist');
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public');

module.exports = {
  PROJECT_ROOT,
  SRC_DIR,
  BUILD_DIR,
  PUBLIC_DIR,
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 3001,
};
