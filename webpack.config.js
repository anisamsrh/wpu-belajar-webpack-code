const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    vendor: './src/vendor.js',
    hello: {
      import: './src/hello.js',
      dependOn: 'shared',
    },
    shared: 'lodash'
  },
  optimization: {
    splitChunks: {
    chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    }),
  ],
  devtool: false,
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.html$/i,
        loader: "html-loader", // agar src di file html menyesuaikan dengan aset yg dibundle
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'logo/[name][ext]'
        }
      },
    ],
  }
}