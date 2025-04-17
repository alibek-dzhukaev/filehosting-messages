const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash].js',
        clean: true,
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            "@common": path.resolve(__dirname, 'src/common'),
            "@config": path.resolve(__dirname, 'src/config'),
            "@components": path.resolve(__dirname, 'src/components'),
            "@flows": path.resolve(__dirname, 'src/flows'),
            "@processes": path.resolve(__dirname, 'src/processes'),
            "@screens": path.resolve(__dirname, 'src/screens'),
            "@services": path.resolve(__dirname, 'src/services'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                                '@babel/preset-typescript',
                            ],
                            plugins: [
                                ['@babel/plugin-proposal-decorators', { "legacy": true }],
                                ['@babel/plugin-proposal-class-properties', { "loose": true }],
                            ],
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            compilerOptions: {
                                experimentalDecorators: true,
                                emitDecoratorMetadata: true
                            }
                        }
                    }
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};