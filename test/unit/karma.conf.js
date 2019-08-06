// Karma configuration
// Generated on Tue Aug 06 2019 11:36:12 GMT+0800 (CST)

const webpackConfig = require('../../build/webpack.test.js');
module.exports = function (config) {
  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['mocha', 'chai'],
    reporters: ['progress'],
    files: ['./index.js'],
    preprocessors: {
        './index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
        logLevel: 'error'
    },
    plugins: [
        'karma-chrome-launcher',
        'karma-mocha',
        'karma-sourcemap-loader',
        'karma-webpack',
        'karma-chai',
        'karma-spec-reporter',
        'karma-coverage',
    ],
    reporters: ['spec', 'coverage'],
})
}
