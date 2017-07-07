const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = module.exports = Merge(CommonConfig, {
    output: {
        pathinfo: true
    },
    devServer: {
        host: "0.0.0.0",
        port: 8080,
        publicPath: '/',
        proxy: require(path.resolve(__dirname, 'localsproxy/index.js'))
    }
});