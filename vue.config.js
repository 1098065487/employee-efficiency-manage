const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // outputDir: "../merchant-admin-web/src/main/webapp/newPage",
  // publicPath: "/tcgroundagencymgtsystem/newPage",
  devServer: {
    proxy: {
      "/projecttest": {
        target: "http://tcwireless.t.17usoft.com/",
        // target: "http://10.181.24.32:8087",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/projecttest": "/projecttest",
        },
      },
    },
  }
})
