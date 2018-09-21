var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");//生成html文件
var cleanWebpackPlugin = require("clean-webpack-plugin");// build 之前删除dist目录
var miniCssExractPlugin = require("mini-css-extract-plugin");//从js中分离css文件

module.exports = {
    mode: "production",//模式 "production" | "development" | "none"
    // 打包入口
    entry: {
        test: ["babel-polyfill", path.resolve(__dirname, "src/app.js")],
    },
    //输入路径和文件名
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name][hash].js",
    },
    // devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true, //处理404
        contentBase: path.join(__dirname, 'dist'),
        port: 9000, //启动端口
        host: '0.0.0.0'//允许外部机器访问
    },
    module: {
        //解析模块的规则
        rules: [
            {
                test: /\.js$|\.jsx$/,
                use: [
                    {
                        loader: "babel-loader"
                    }]
            },
            {
                test: /\.css$/,
                //注意顺序: webpack的loader的配置是从右往左的 css-loader解析css文件 style-loader将样式代码嵌入js
                use: [miniCssExractPlugin.loader, "css-loader"]
            },
            {
                test: /\.less$/,//解析 antd 的less 文件
                use: [miniCssExractPlugin.loader, "css-loader", {
                    loader: "less-loader", options: {
                        javascriptEnabled: true
                    }
                }],
            },
            {
                test: /\.(png|jpg|gif|mp3)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            }
        ]
    },
    //文件名自动补全
    resolve: {
        extensions: [".jsx", ".js"]
    },
    plugins: [
        new htmlWebpackPlugin({title: "mk_blog"}),
        new cleanWebpackPlugin(['dist']),
        new miniCssExractPlugin({
            filename: "[name].css"
        })
    ]
}