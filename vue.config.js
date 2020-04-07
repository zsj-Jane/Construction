// module.exports = {
//     devServer: {// dev 环境
//         // host:'localhost',
//         // port:8080,//端口号
//         // https:false,
//         // open:true,//配置自动启动浏览器
//         // 需要 proxyTable 代理的接口（可跨域）
//         // 注意：测试阶段使用，上线后和后端是在同一服务器的，不需要跨域
//         // 配置多个代理
//         proxy: {
//             '/api': {//此处并非一定和url一致
//                 target: 'http://47.52.252.130:17001',//要访问的接口域名
//                 changeOrigin: true,//是否跨域，开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收的数据，这样服务端和客户端进行数据的交互就不会有跨域问题
//                 pathRewrite: {
//                     '^/api': ''//这里理解成用‘/api’代替target里面的地址
//                 }
//             }
//         }
//     }
// }