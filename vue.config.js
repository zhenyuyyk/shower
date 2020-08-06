module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '阵雨后台管理系统'
                return args
            })
    }
}