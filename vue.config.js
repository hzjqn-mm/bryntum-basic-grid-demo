module.exports = {
    publicPath            : '',
    productionSourceMap   : false,
    transpileDependencies : ['@bryntum/grid'],
    configureWebpack      : {
        performance : {
            hints : false
        }
    }
};
