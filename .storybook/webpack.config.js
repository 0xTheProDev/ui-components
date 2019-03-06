const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = ({ config, mode }) => {
  // console.log(storybookBaseConfig);
  // config = storybookBaseConfig(config, env);

  // To show JSX in storybook:
  // Transpile TSX to JSX with "preserve"
  // Use babel to transpile JSX to ES5 JS
  config.output.pathinfo = false;

  // All of this is still a bit too slow for my tastes. The next perf improvement should be
  // Auto-DLL or hard-source-webpack Webpack 5 will have that functionality by default but there isn't much news about the release
  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: [/node_modules/, /test_image/, /packages/],
    include: [/stories/, /components/, /src/],
    loaders: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.scss$/,
    exclude: [/\.module.scss$/],
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          sourceMap: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      {
        loader: require.resolve('sass-loader'),
        options: {
          sourceMap: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
  });

  // Now that we're in Webpack 4 land we should probably use the newer css loader and drop style-loader and extract text
  config.module.rules.push({
    test: /\.module.scss$/,
    use: [
      require.resolve('style-loader'),
      {
        loader: require.resolve('css-loader'),
        options: {
          sourceMap: true,
          importLoaders: 1,
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      {
        loader: require.resolve('sass-loader'),
        options: {
          sourceMap: true,
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
  });

  config.resolve.mainFiles = ['index'];
  config.resolve.extensions.push('.tsx');
  config.resolve.extensions.push('.ts');
  config.resolve.extensions.push('.js');
  config.resolve.extensions.push('.jsx');
  config.resolve.extensions.push('.css');
  config.resolve.extensions.push('.scss');

  config.plugins = config.plugins.filter(
    plugin => plugin.constructor.name !== 'UglifyJsPlugin'
  );

  config.plugins.push(
    new ForkTsCheckerWebpackPlugin({
      workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
    })
  );

  return config;
};
