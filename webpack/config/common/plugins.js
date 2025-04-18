const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const { PUBLIC_DIR } = require('../../constants');

module.exports = [
    new HtmlWebpackPlugin({
        template: path.join(PUBLIC_DIR, 'index.html'),
    }),
];
