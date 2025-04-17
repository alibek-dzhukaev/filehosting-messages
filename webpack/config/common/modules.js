module.exports = {
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
                            ['@babel/plugin-proposal-decorators', { legacy: true }],
                            ['@babel/plugin-proposal-class-properties', { loose: true }],
                        ],
                    },
                },
                {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        compilerOptions: {
                            experimentalDecorators: true,
                            emitDecoratorMetadata: true,
                        },
                    },
                },
            ],
        },
        {
            test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf)$/i,
            type: 'asset/resource',
        },
    ],
};