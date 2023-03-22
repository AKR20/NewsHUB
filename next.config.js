const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Add support for importing modules using absolute paths
    config.resolve.modules.push(path.resolve('./'));

    // Exclude the `node_modules` folder from being processed by babel
    config.module.rules.push({
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
        },
      },
    });

    // Modify the webpack configuration only for the server build
    if (isServer) {
      // Add a custom plugin to the webpack configuration
      config.plugins.push(new MyCustomWebpackPlugin());
    }

    return config;
  },
};
