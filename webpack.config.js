var path = require('path')

var htmlWebpackPlugin = require('html-webpack-plugin')

var VueLoaderPlugin = require('vue-loader/lib/plugin')

// 导出一个配置对象，将来webpack在启动的时候，会默认来查找webpack.config.js，并读取这个文件中导出的配置对象，来进行打包处理
module.exports = {
    mode: 'production',
    entry: path.join(__dirname, './src/main.js'), // 项目入口文件
    output: { // 配置输出选项
        path: path.join(__dirname, './dist'), // 配置输出的路径
        filename: 'bundle.js' // 配置输出的文件名
    },
    plugins:[ // 添加plugins节点配置插件
           new htmlWebpackPlugin({
               template:path.join(__dirname, './src/index.html'),//模板路径
               filename:'index.html'//自动生成的HTML文件的名称
           }),
           new VueLoaderPlugin()
       ],
    module: { // 用来配置第三方loader模块的
        rules: [ // 文件的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },//处理css文件的规则
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(png|jpg|gif)$/, use: 'url-loader' },
            { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=43960' },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    resolve: {
        alias: {
           //'vue$': 'vue/dist/vue.esm.js'
        }
     },
     devServer: {
        //contentBase: path.join(__dirname, './dist'),
        //host: '0.0.0.0',
        disableHostCheck: true, //  新增该配置项
        //port: 5566
        proxy: { // axios跨域问题解决
          '/api': {
              target: 'https://api.douban.com/v2',
              secure: false, // 接受 运行在 https 上的服务
              changeOrigin: true,
              pathRewrite:{  // 路径重写，
                '^/api': ''  // 替换target中的请求地址，也就是说以后你在请求http://api.douban.com/v2/XXXXX这个地址的时候直接写成/api即可。
              }
          }
        }
      },
      performance: {
        hints: "warning",
        maxAssetSize: 30000000, // 整数类型（以字节为单位）
        maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
        assetFilter: (assetFilename) => { assetFilename.endsWith('.css') || assetFilename.endsWith('.js') }
      }
}
