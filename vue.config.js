const path = require('path')

module.exports = { 
  pwa: { 
    iconPaths: {
      favicon32: 'favicon.ico', 
      favicon316: 'favicon.ico', 
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico', 
      msTileImage: 'favicon.ico',
    } 
  }, // 配置 iconPaths
  devServer: {
    public: require('os').networkInterfaces()
    [Object.keys(require('os').networkInterfaces())[0]]
    [1].address + ':8080'
  },
  lintOnSave: false,
  chainWebpack: config =>{
    const dir = path.resolve(__dirname,'src/assets/icons')

    config.module
       .rule('svg-sprite')
       .test(/\.svg$/)
       .include.add(dir).end()
       .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end()
      //  .use('svgo-loader').loader('svgo-loader')
      //  .tap(options => ({...options,plugins: [{removeAttrs: {attrs: 'fill'}}]})).end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite:true}])
    config.module.rule('svg').exclude.add(dir)
  }
}
