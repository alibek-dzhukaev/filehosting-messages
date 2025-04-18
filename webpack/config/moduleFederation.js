const { ModuleFederationPlugin } = require('webpack').container;

module.exports = (isProduction = false) => {
    const sharedDependencies = {
        'react': {
            singleton: true,
            requiredVersion: '^19.0.0',
            eager: true,
        },
        'react-dom': {
            singleton: true,
            requiredVersion: '^19.0.0',
            eager: true,
        },
    };

    return new ModuleFederationPlugin({
        name: 'host',
        filename: 'remoteEntry.js',
        remotes: {
        },
        exposes: {
        },
        shared: {
            ...sharedDependencies,
        },
    });
};