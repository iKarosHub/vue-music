module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        css: '@/assets/css',
        common: '@/common',
        components: '@/components',
        api: '@/api',
        views: '@/views'
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "css/variable.scss";'
      }
    }
  }
}
