const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir);
}

var targetUrl = 'http://localhost:8080';
if (process.env.VUE_APP_URL != undefined && process.env.VUE_APP_URL != '') {
    targetUrl = process.env.VUE_APP_URL;
}
console.log('targetUrl:' + targetUrl);

module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "./", // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
    outputDir: "dist", // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
    assetsDir: "static", //放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
    lintOnSave: true, // 是否开启eslint保存检测
    productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
    chainWebpack: (config) => {
        config.resolve.alias  // 为指定目录设置全局别名
            .set('@', resolve('src'))
            .set('@public', resolve('public'))

    },
    devServer: {
        /* 本地ip地址 */
        host: "localhost",
        port: "80",
        hot: true,

        /* 自动打开浏览器 */
        open: false,
        overlay: {
            warning: false,
            error: true
        }, // 错误、警告在页面弹出
        /* 跨域代理 */
        proxy: {
            "/api": {
                /* 目标代理服务器地址 */

                target: "http://192.168.101.106" , //
                /* 允许跨域 */
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/api": ""
                }
            } //,
            // '/foo': {
            //   target: '<other_url>'
            // }
        }
        // pluginOptions: {// 第三方插件配置
        //
        // }
    }
};
