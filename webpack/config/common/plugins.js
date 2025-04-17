const HtmlWebpackPlugin = require('html-webpack-plugin');
const { PUBLIC_DIR } = require('../../constants');
const path = require('path');

module.exports = [
    new HtmlWebpackPlugin({
        template: path.join(PUBLIC_DIR, 'index.html'),
    }),
];
