const path = require('path');
const webpack = require('webpack');

class MyCustomWebpackPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('MyCustomWebpackPlugin', () => {
      console.log('MyCustomWebpackPlugin: build finished!');
    });
  }
}

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

    // Define a custom plugin globally for both client and server builds
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.CUSTOM_VAR': JSON.stringify('my-custom-value'),
      })
    );

    return config;
  },
};
