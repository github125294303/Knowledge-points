const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: '/\.css/',
            loader: ['css-loader', 'style-loader']
        }],
        rules: [{
            test: '/\.less/',
            loader: ['less-loader', 'style-loader']
        }]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 9000,
        host: 'localhost',
        open: true,//是否自动打开浏览器
        // hash: true,//是否加hash
        compress: true,
        proxy: {}//配webpack代理跨域
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]

}
