'use strict';
let browsersync = require('webpack-browsersync');
let webpackConfig = require('./webpack.config.js');

browsersync.startServer({
  webpackConfig,
  srcDir: 'public', // override default "src" dir
  //pushState: true, // includes "history api fallback" yes or no
  //browserSyncConfig: {}, // override browsersync settings
  hot: true // include WebpackHotMiddleware middleware
  //devMiddlewareConfig: {} // override devMiddlewareConfig settings
});
