const express = require('express');
const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config');

const compile = webpack(config);
const app = express();

webpackDevMiddleware = WebpackDevMiddleware(compile, {
  publicPath: '/dist/'
});

app.use(webpackDevMiddleware);

const port = 5123;

const uri = `http://localhost:${port}`;
webpackDevMiddleware.waitUntilValid(() => console.log(`Listening at ${uri}.\n`));

app.listen(port);
