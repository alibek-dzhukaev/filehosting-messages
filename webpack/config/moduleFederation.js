const { ModuleFederationPlugin } = require('webpack').container;

module.exports = () => {
  const sharedDependencies = {
    react: {
      singleton: true,
      requiredVersion: '^18.2.0',
      eager: true,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: '^18.2.0',
      eager: true,
    },
    'react-router-dom': {
      singleton: true,
      requiredVersion: '^6.3.0',
    },
  };

  return new ModuleFederationPlugin({
    name: 'host',
    filename: 'remoteEntry.js',
    remotes: {},
    exposes: {},
    shared: {
      ...sharedDependencies,
    },
  });
};
