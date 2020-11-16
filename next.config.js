const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]',
  },
  env: {
    server: process.env.SERVER,
    notification: process.env.NOTIFICATION,
  },
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.+(js|jsx|ts|tsx)$/,
      loader: defaultLoaders.babel,
      include: /react-ui/,
    });

    config.module.rules.push({
      test: /\.css$/,
      use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
    });

    return config;
  },
});
