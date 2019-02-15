####webpcak简化流程 
1 . 建立文件夹 
    
2 . 初始化  npm init -y 

3 . 下载webpack 
>npm install webpack webpack-cli -D

4 .创建2个文件夹  
>mkdir src dist 

5.创建文件 webpack.config.js 

6.把下面的代码写入webpack.config.js 文件  

entry:入口  
output:出口  
module：配置模块,主要用来配置不同文件的加载器
plugins：配置插件
devServer：配置开发服务器
const path=require('path');

module.exports={
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module: {},
    plugins: [],
    devServer: {}
}

7.运行npx webpack 命令查看编译 或者在package.json 配置命令 
scripts": {
    "build": "webpack --mode production"
}

8.配置开发服务器
npm i webpack-dev-server –D
npm i webpack-dev-server –dev--save 

contentBase 配置开发服务运行时的文件根目录
host：开发服务器监听的主机地址
compress 开发服务器是否启动gzip等压缩
port：开发服务器监听的端口

9.配置开发服务器 
1.在package.json中添加启动命令
  在`package.json`中添加启动命令
"scripts": {
  "dev": "npx webpack-dev-server"
}
启动命令  npx webpack-dev-server

2.在`package.json`中添加启动命令
"scripts": {
  "dev": "webpack-dev-server --mode development"
} 或者 
"scripts": {
  "dev": "webpack-dev-server --open --mode development"  
}
启动命令  npm run dev 

10.配置html 插件 
npm i html-webpack-plugin -D
template 模版路径
filename 文件名

11.使用less和sass的时候  
npm i less less-loader -D
npm i node-sass sass-loader -D