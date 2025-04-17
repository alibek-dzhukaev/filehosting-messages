const { HOST, PORT, PUBLIC_DIR } = require('../../constants');

module.exports = {
    static: {
        directory: PUBLIC_DIR,
    },
    compress: true,
    port: PORT,
    host: HOST,
    hot: true,
    historyApiFallback: true,
    client: {
        overlay: {
            errors: true,
            warnings: false,
        },
        logging: 'warn',
    },
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
};
