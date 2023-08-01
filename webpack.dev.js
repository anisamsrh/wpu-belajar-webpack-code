const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'development', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  watch: true,
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ]
})