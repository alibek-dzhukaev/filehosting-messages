const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
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
            "@common":path.resolve(__dirname, 'src/common'),
            "@config":path.resolve(__dirname, 'src/config'),
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
                                isDevelopment && require.resolve('react-refresh/babel'),
                            ].filter(Boolean),
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
                test: /\.(scss|sass|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: true,
                                localIdentName: isDevelopment
                                    ? '[path][name]__[local]--[hash:base64:5]'
                                    : '[hash:base64:8]',
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
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        isDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3001,
        hot: true,
        historyApiFallback: true,
    },
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
};
