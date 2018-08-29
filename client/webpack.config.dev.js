var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");//生成html文件
var cleanWebpackPlugin = require("clean-webpack-plugin");// build 之前删除dist目录
var miniCssExractPlugin = require("mini-css-extract-plugin");//从js中分离css文件

module.exports = {
    mode: "development",//模式 "production" | "development" | "none"
    // 打包入口
    entry: {
        test: path.resolve(__dirname, "index.js"),
    },
    //输入路径和文件名
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name][hash].js",
    },
    devtool: 'inline-source-map',
    devServer:{
        historyApiFallback: true, //处理404
        contentBase: path.join(__dirname, 'dist'),
        port: 9000 //启动端口
    },
    module: {
        //解析模块的规则
        rules: [
            {
                test: /\.js$|\.jsx$/,
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                //注意顺序: webpack的loader的配置是从右往左的 css-loader解析css文件 style-loader将样式代码嵌入js
                use: [miniCssExractPlugin.loader, "css-loader"]
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