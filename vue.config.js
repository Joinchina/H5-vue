// vue.config.js
module.exports = {
    publicPath: './',
    css:{
        extract:true,
        sourceMap:false,
        loaderOptions: {
            postcss: {
              plugins: [
                require("autoprefixer")({
                  overrideBrowserslist: ["last 15 versions"]
                }),
                require("postcss-pxtorem")({
                  rootValue: 75,
                  selectorBlackList: ["ig"],
                  propList: ["*"],
                  exclude: /node_modules/
                })
              ]
            }
        }
    },
    lintOnSave: false,
    devServer: {
      hot: true,
      open: true,                                 //配置自动启动浏览器
      port: 8888,
      host:'0.0.0.0',
      proxy: {
        '/api': {
          target: 'http://t-bind.wanhuhealth.com',
          // target:'http://127.0.0.1:7001',
          changeOrigin: true,
          // ws: true,
        }
      }
    }
}
