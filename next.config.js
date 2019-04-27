// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.js$/,
      enforce: 'pre',
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        // Emit errors as warnings for dev to not break webpack build.
        // Eslint errors are shown in console for dev, yay :-)
        emitWarning: options.dev,
      },
    })
    return config
  },
})
