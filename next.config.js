const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssLoaderOptions: {
    importLoaders: true,
    localIdentName: '[local]',
  },
});
