const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.js')

const webpackConfig = merge(baseWebpackConfig, {
    devtool: '#inline-source-map'
});

delete webpackConfig.entry;

module.exports = webpackConfig;