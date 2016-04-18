"use strict";
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
  entry: [
    //"bootstrap-loader",
    "./src/index.js"
  ],
  output: {
    path: `${__dirname}/public`,
    //publicPath: "/public/dist",
    filename: "app.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react']
        }},
      { test: /\.scss$/, loader: 'style!css?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass' },
      { test: /\.css$/, loader: 'style!css'},
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }, // inline base64 URLs for <=8k images, direct URLs for the rest
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "svg-sprite?" + JSON.stringify({
        prefixize: false
      })}

    ]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};