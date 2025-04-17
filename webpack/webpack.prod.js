const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const prodPlugins = require('./config/prod/plugins');
const prodOptimization = require('./config/prod/optimization');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        ...common.output,
        assetModuleFilename: 'assets/[name].[contenthash][ext][query]',
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: true,
                                localIdentName: '[hash:base64:8]',
                            },
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name].[contenthash][ext][query]',
                },
            },
        ],
    },
    plugins: prodPlugins,
    optimization: prodOptimization,
});
