const { SRC_DIR } = require('../../constants');
const path = require('path');

module.exports = {
    '@': SRC_DIR,
    '@common': path.join(SRC_DIR, 'common'),
    '@config': path.join(SRC_DIR, 'config'),
    '@components': path.join(SRC_DIR, 'components'),
    '@flows': path.join(SRC_DIR, 'flows'),
    '@processes': path.join(SRC_DIR, 'processes'),
    '@screens': path.join(SRC_DIR, 'screens'),
    '@services': path.join(SRC_DIR, 'services'),
};
