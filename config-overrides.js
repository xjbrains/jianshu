const { override,addWebpackAlias, addWebpackPlugin } = require('customize-cra');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
  addWebpackPlugin(new ProgressBarPlugin({
      complete: "█",
      format: `${chalk.green('Building')} [ ${chalk.green(':bar')} ] ':msg:' ${chalk.bold('(:percent)')}`,
      clear: true
    })
  )
)