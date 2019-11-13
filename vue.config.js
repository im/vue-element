
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
        proxy: 'http://zhfw.chinalifepartner.com/api/'
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('assets', resolve('src/assets'))
            .set('font', resolve('src/assets/font'))
            .set('api', resolve('src/api'))
            .set('http', resolve('src/http.js'))
            .set('style', resolve('src/style'))
    }
}