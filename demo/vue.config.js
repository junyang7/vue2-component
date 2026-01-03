const path = require('path');

module.exports = {
    devServer: {
        port: 8080,
        open: true
    },

    productionSourceMap: true,

    configureWebpack: {
        resolve: {
            alias: {
                '@lib': path.resolve(__dirname, '../../src')
            }
        },
        devtool: 'eval-source-map'
    }
};
