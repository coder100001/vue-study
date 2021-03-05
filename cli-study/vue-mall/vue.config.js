module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/compontents',
                'network': '@/network',
                'router': '@/router',
                'views': '@/views'
            }
        }
    }
}