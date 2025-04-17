const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    minimizer: [
        `...`,
        new CssMinimizerPlugin({
            parallel: true,
            minimizerOptions: {
                preset: [
                    'default',
                    {
                        discardComments: { removeAll: true },
                        normalizeWhitespace: true,
                        colormin: true,
                    },
                ],
            },
        }),
    ],
    splitChunks: {
        chunks: 'all',
        cacheGroups: {
            styles: {
                name: 'styles',
                type: 'css/mini-extract',
                chunks: 'all',
                enforce: true,
            },
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                reuseExistingChunk: true,
            },
            default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true,
            },
        },
    },
};
